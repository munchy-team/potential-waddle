


"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""





from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
# from django.conf.urls import url
#from uploader import views
from blog import urls
#from accountss import urls
from accountss.views import registration_view, logout_view,login_view,account_view,must_authenticate_view
from blog.views import create_blog_view,detail_blog_view,edit_blog_view,get_blog_queryset

from personal.views import home_screen_view

from personal.views import (
	home_screen_view,
)

from accountss.views import (
    registration_view,
    logout_view,
    login_view,
    account_view,
	must_authenticate_view,
)
# from accountss import urls

#from django.conf.urls import url

# from mysite import settings






from . import views


from django.views.generic import TemplateView
admin.site.site_header= "Project Progress Website"


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.realhomepage),
    #path('', TemplateView.as_view(template_name="homepage.html"), name="realhomepage"),
    path('home', views.home),
    path('progress', views.progress),
   # path('progress/', include('progress.urls')),
    path('navigation/', views.navigation),
   path('accounts/', include('allauth.urls')),
    path('dev-tools', TemplateView.as_view(template_name="dev-tools.html")), 
    path('navigation', TemplateView.as_view(template_name="navigation.html")),
    path('navigation/specific-header', TemplateView.as_view(template_name="specific-header.html")),
    path('ml/', TemplateView.as_view(template_name="logedin.html")),
  path('CSerror', views.CSRF_ERROR),
  path('munchy2', TemplateView.as_view(template_name="logon2.html")),
  path('munchy3', TemplateView.as_view(template_name="logon3.html")),
  path('answers/', include('blog.urls')),
  # path('accountss/', include('accountss.urls')),
   # url(r'^upload-tool/$', views.main, name='main'),
  #  url(r'^uploader/media/$', views.simple_upload, name='simple_upload'),
   # url(r'^media/documents/test.txt$', views.main, name='simple_upload'),
   # url(r'^main/$', views.main, name='main'),
   # url(r'^downloads/$', views.simple_upload, name='simple_upload'),
   path('answers/', home_screen_view, name="home"),
    path('answers-account/', account_view, name="account"),
    path('answers/admin/', admin.site.urls),
    path('answer/', include('blog.urls', 'blog')),
    path('answers-account/login/', login_view, name="login"),
    path('answers-account/logout/', logout_view, name="logout"),
	path('answers-account/must_authenticate/', must_authenticate_view, name="must_authenticate"),
    path('answers-account/register/', registration_view, name="register"),
    path('answers-account/password_change/done/', auth_views.PasswordChangeDoneView.as_view(template_name='registration/password_change_done.html'), 
        name='password_change_done'),

    path('answers-account/password_change/', auth_views.PasswordChangeView.as_view(template_name='registration/password_change.html'), 
        name='password_change'),

    path('answers-account/password_reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='registration/password_reset_done.html'),
     name='password_reset_done'),

    path('answers-account/reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('answers-account/password_reset/', auth_views.PasswordResetView.as_view(), name='password_reset'),
    
    path('answers-account/reset/done/', auth_views.PasswordResetCompleteView.as_view(template_name='registration/password_reset_complete.html'),
     name='password_reset_complete'),
]


if settings.DEBUG==True:
    urlpatterns += static(settings.STATIC_URL,document_root=settings.STATIC_ROOT)
   #urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_URL)
   #urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
   #urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
 # how can we implement this: https://www.youtube.com/watch?v=v5FWAxi5QqQ look at timestamp 7:18. I dont know how to implement that in html. #no idea help 
  
    
    #path('home/', ) # this wont work i think.
  

    

       
