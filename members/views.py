from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


def login_user(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.success(request, "Ошибка при авторизации")
            return redirect('login')
    else:
        return render(request, 'members/login.html')


def logout_user(request):
    logout(request)
    return redirect('login')
