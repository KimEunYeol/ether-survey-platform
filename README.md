
## 1. Framework

- Framework란?
== 자주 사용되는 코드를 체계화 하여 쉽게 사용할 수 있도록 도와주는 코드집합 ==

- 라이브러리와 혼동 될수 있지만 좀 더 규모가 크고 프로젝트의 기반이 됨
- 웹 개발에 있어서 의존도가 높은편에 속함
- 웹 개발에 필요한 기본적인 구조와 코드가 만들어져있음
 - ex : URL 파싱, 응답생성, 세션관리, 데이터베이스 연동, 요청파싱 등

- - -

## 2. Djago Framework의 구조

- 크게 세 가지 계층으로 나눌 수 있다(MVC)
 - 모델 계층 : 뷰 계층 : 템플릿 계층
- 위젯이나 내장된 필드 데이터를 다루기위한 폼
- 개발 프로세스
- 관리자

##### 2.1 모델 계층
- 데이터를 구조화 하고 조직하기 위한 추상적인 계층
- 데이터를 처리하기 위한 함수를 제공한다
- 클래스 형태의 코드를 입력하면 SQL 구문으로 생성해준다
- 직접 데이터베이스를 설정하지 않더라도 필드옵션으로 처리할수 있다
- RawSQL을 활용해 복잡한 데이터 처리 작업을 할수 있다

~~~python
from django.db import models

class Person(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
~~~

~~~SQL
CREATE TABLE myapp_person (
    "id" serial NOT NULL PRIMARY KEY,
    "first_name" varchar(30) NOT NULL,
    "last_name" varchar(30) NOT NULL
);
~~~

##### 2.2 뷰 계층
- 비지니스 로직에 필요한 기능들을 제공한다

~~~python
from django.urls import path

from . import views

urlpatterns = [
    path('articles/2003/', views.special_case_2003),
    path('articles/<int:year>/', views.year_archive),
    path('articles/<int:year>/<int:month>/', views.month_archive),
    path('articles/<int:year>/<int:month>/<slug:slug>/', views.article_detail),
]
~~~

##### 2.3 템플릿 계층
- html 안에서 사용하는 코드를 활용해 디자인을 위한 문법을 제공

~~~pyhton
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            # ... some options here ...
        },
    },
]
~~~

## 3. 개발환경 설정

1. pip install virtualenv
2. virtualenv Django_venv
3. cd Django_venv -> Scripts/activate.bat
4. django-admin startproject [프로젝트 이름]
5. django-admin startapp [앱 이름]

 프로젝트 생성후 각각의 기능을 App으로 구성한다 (ex : board, user ,,,)
 작성한 App의 폴더안에 'templates'디렉토리를 생성해준다(오탈자가에 유의)

6. 프로젝트 명 폴더의 settings.py 파일에 INSTALLED_APPS 리스트 부분에 자신의 앱을 추가해준다

 ~~~python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'board'
    'user'
]
 ~~~

7. python manage.py makemigrations
 새로 생성된 모델의 테이블을 생성해준다

8. python manage.py migrate
 앱들이 사용하는 테이블을 자동생성 해준다

9. sqlite3 db.sqlite3 DB접속
10. .tables / .schema [테이블 명]
 생성된 DB를 확인해준다

11. model이 변경된경우에 makemagrations 과정을 위와같이 해줘야 DB에 반영이되며, 변경사항까지 템플릿 엔진에서 관리한다

## 4. 관리자 페이지

#### 4.1 URL

`urlpatterns` 목록은 URL을 뷰로 라우팅합니다. 자세한 내용은 다음 url을 참고한다

    https://docs.djangoproject.com/en/3.0/topics/http/urls/

##### 예시
기능보기
	 1. 가져 오기 추가 : my_app 가져 오기보기에서
     2. URL 패턴에 URL을 추가하십시오 : path ( '', views.home, name = 'home')
클래스 기반 뷰
     1. 가져 오기 추가 : other_app.views에서 가져 오기 홈
     2. urlpatterns에 URL을 추가합니다 : path ( '', Home.as_view (), name = 'home')
다른 URLconf 포함
     1. include () 함수를 가져옵니다. django.urls import include, path에서
     2. urlpatterns에 URL을 추가합니다 : path ( 'blog /', include ( 'blog.urls'))

주소뒤에 admin을 붙이면 Django의 관리자 도구를 사용할수 있다
~~~python
urlpatterns = [
    path('admin/', admin.site.urls),
]
~~~

#### 4.2 Admin

1. python manage.py runserver
 - 서버를 관리하기 위한 페이지(url 뒤에 '/admin'을 추가해서 접속한다)

2. 관리자 페이지로 접속하기 위해서는 계정이 필요하기 때문에 python manage.py createsuperuser로 계정을 생성해준다
3. 다시 서버에 접속하면 아래와 같이 생성된 페이지를 볼수있다(기본적으로 8000번 포트를 사용한다)
![image](https://user-images.githubusercontent.com/38580908/71330195-d8135f80-256e-11ea-81c5-499402a0953e.png)

4. 생성한 User Model을 적용하기 위해서는 user app 디렉토리의 admin.py로 가서 admin register 코드를 추가해준다

~~~python
from django.contrib import admin
from .models import User

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password') # 모델 클래스 안에 있는 필드들이 리스트업 함

admin.site.register(User, UserAdmin)
~~~

 생성된 User 모델에 새로운 레코드나 오브젝트를 아래와같이 쉽게 추가/삭제/수정 가능하다.

![image](https://user-images.githubusercontent.com/38580908/71320153-d1430900-24ea-11ea-98fd-83c91449b8f4.png)
![image](https://user-images.githubusercontent.com/38580908/71320164-de5ff800-24ea-11ea-9ebd-7f8f72b5378e.png)

관리자 페이지에서 보여지는 데이터를 좀더 보기 편하게 커스터마이징 하기위해 User의 model.py를 아래와 같이 수정하였다
~~~python
# 클래스명은 관리자 페이지 내에서 테이블명으로 지정됨
class User(models.Model):
    username = models.CharField(max_length=32,
                                verbose_name='사용자명') # 관리자페이지에서 나타나는 필드명)
    password = models.CharField(max_length=64,
                                verbose_name="비밀번호")
    registered_datetime = models.DateTimeField(auto_now_add=True, # 데이터가 들어가는 시점을 자동으로 등록
                                               verbose_name='등록시간')

    # 관리자 페이지의 Model은 기본적으로 클래스명으로 명명되는데 클래스명이 아닌 다른 이름을 지정할때 사용하는 내장함수
    def __str__(self):
        return "KimEunYeol"
        # return self.username

    # 데이터베이스에 테이블 명을 지정하고자 할때
    class  Meta:
        db_table = 'django_user'
        verbose_name = 'TEST 사용자'
        verbose_name_plural = 'TEST 사용자'
~~~


## 5. View 작성
views에서는 모델링 된 속성들을 request url을 형성할수 있게 매칭 시켜준다
~~~ python
# views.py
def register(request):
    if request.method == 'GET':
        return render(request, 'regitster.html') # html파일의 상대 경로를 입력에 유의한다
    elif request.method == 'POST':
        username = request.POST.get('username', None)
        email = request.POST.get('email',None)
        password = request.POST.get('password', None)
        re_password = request.POST.get('re-password', None)

        res_data = {}
        if not(username and email and password and re_password):
            res_data['error'] = '모든 값을 입력해야 합니다'
        elif password != re_password:
            res_data['error'] = '비밀번호가 일치하지 않습니다'
            # return HttpResponse('비밀번호가 일치하지 않습니다')
        else:
            user = User(
                username = username,
                eamil = email,
                password = make_password(password) # 비밀번호 암호화
            )
            user.save()

        return render(request, 'regitster.html', res_data)

# model.py
class User(models.Model):
    username = models.CharField(max_length=32,
                                verbose_name='사용자명') # 관리자페이지에서 나타나는 필드명)
    email = models.EmailField(max_length=128,
                              default='example@gmail.com',
                                  verbose_name='사용자 이메일')
    password = models.CharField(max_length=64,
                                verbose_name="비밀번호")
    registered_datetime = models.DateTimeField(auto_now_add=True, # 데이터가 들어가는 시점을 자동으로 등록
                                               verbose_name='등록시간')
~~~


~~~js
<meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">

# 부트스트랩의 CDN을 사용하는경우
<link crossorigin="anonymous" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" rel="stylesheet">

# css파일을 정적으로 적용시키는 경우
<link rel="stylesheet" href="/static/bootstrap.min.css"/>
# settings.py 에서 추가적인 경로 설정작업이 필요하다
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]

~~~

## 6. 기능만들기 : login
### 6.1 session
![image](https://user-images.githubusercontent.com/38580908/71584896-17861100-2b58-11ea-9c61-5a6886138cdf.png)

- 간단하게 클라이언트와 서버로 나누어 생각 할수있다. 클라이언트는 브라우저로 이해하면 된다
- 흐름을 살펴보면 서버에 요청을 보낸 클라이언트는 웹사이트로 응답을 받는데 헤더 위치에 클라이언트가 사용할 쿠키정보(키)를 넣어서 준다
- 서버는 클라이언트에게 보낸 쿠키정보 키를 DB에 저장한다
- 클라이언트는 그 쿠키정보 키를 자신의 쿠키저장소에 저장한다(각 웹 사이트 별로 나눠서 저장함)
- 그 다음 요청 부터 클라이언트는 항상 쿠키정보를 서버에 같이 보낸다 그러면 서버는 그 쿠키정보로 클라이언트를 식별해 원하는 정보를 DB에서 꺼내 응답해준다
- 예를들어 클라이언트가 로그인 요청을 하면 서버에는 클라이언트의 각종 정보를 DB를 저장하게 된다. 쿠키 키값을 이용해 해당 사용자를 식별하고 사용자 정보에 맞는 응답을 진행하게 된다

- 쿠키(Cookie) : 웹 브라우저 안의 하나의 저장소, 웹페이지의 데이터를 유지하는 역할을 한다

~~~python

def home(request):
    user_id = request.session.get('user')

    if user_id:
        user = User.objects.get(pk==user_id)
        return HttpResponse(user.username)

    return HttpResponse('Home!')

def logout(request):
    if request.session.get('user'):
        del(request.session['user'])
    return redirect('/')

def login (request):
    if request.method == 'GET':
        return render(request, 'login.html')
    elif request.method == 'POST':
        username = request.POST.get('username', None)
        password = request.POST.get('password', None)

        res_data = {}
        if not (username and password):
            res_data['error'] = '모든 값을 입력해야합니다'
        else:
            user = User.objects.get(username = username)
            if check_password(password, user.password):
                request.sesstion['user'] = user.id
                return redirect('/')
            else:
                res_data['error'] = '비밀번호를 틀렸습니다.'

        return render(request, 'login.html', res_data)
~~~


### 6.2 form

django에서 제공하는 form을 사용하면 좀 더 간단하게 views를 작성할수 있다

~~~python
from django import forms
from .models import User
from django.contrib.auth.hashers import check_password

class LoginForm(forms.Form):
    username = forms.CharField(
        error_messages={
            'required' : '아이디를 입력해주세요.'
        },
        max_length=32, label="사용자 이름")
    password = forms.CharField(
        error_messages={
            'required' : '비밀번호를 입력해주세요.'
        },
        widget=forms.PasswordInput, label="비밀번호")

    def clean(self):
        clean_data = super().clean()
        username = clean_data.get('username')
        password = clean_data.get('password')

        if username and password:
            user = User.objects.get(username = username)
            if not check_password(password, user.password):
                self.add_error('password', '비밀번호가 틀렸습니다')
            else:
                self.user_id = user.id
~~~


## 7. Tag
### 7.1 n:n 관계
1:n -> foreingkey 1명의 작성자가 여러 글을 쓸수있음
n:n -> 하나의 테그가 여러 글에 들어갈수도있고 한글에 여러 테그가 들어갈수도 있음

1. python manage.py startapp tag
2. 디렉토리에 필요한 모듈이 설치됨

## 8. 배포
pythonanywhere에서 하면되는데 콘솔작업에 CPU 리소스가 많이 잡아먹힌다 노트북이 힘들어해서 중간에 그만 두었다
