
from django.urls import path
from . import views
from django.contrib.auth.views import LoginView, LogoutView
urlpatterns = [
path('', views.home, name='home'),
path('tresure/', views.tresure, name='tresure'),
path('register/', views.register, name='register'),
path('login/', LoginView.as_view(), name='login'),
path('logout/', LogoutView.as_view(next_page='home'), name='logout'),



]
