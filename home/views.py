from django.contrib.auth.decorators import login_required
from django.shortcuts import render


@login_required(login_url='/login/')
def render_main_page(request):
    if request.method == "GET":
        kilometer_cost = request.GET.get('kilometer')
        weight = request.GET.get('weight')
        context = {
            'kilometer_cost': kilometer_cost,
            'weight': weight
        }
        return render(request, 'home/calculator.html', context)
    else:
        return render(request, 'home/calculator.html')


@login_required(login_url='/login/')
def render_table_page(request):
    return render(request, 'home/table.html')

