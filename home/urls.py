from django.urls import path
from . import views

urlpatterns = [
    path('', views.render_main_page, name='home'),
    path('table/', views.render_table_page, name='excel')
]
