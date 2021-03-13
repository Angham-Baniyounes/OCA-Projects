from django.contrib import admin
from django.urls import path, include 
from project8 import views

urlpatterns = [
    path('admin/', admin.site.urls),
    # pages
    path('', views.index),
    # path('login/', views.login),
    path('form_upload/', views.import_data),
    path('invoice/', views.invoice),
    path('projects/', views.projects),
    path('tables/', views.tables),
    #End pages
]
