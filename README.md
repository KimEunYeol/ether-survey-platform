
## 1. 개요

- 설문조사는 미리 구성한 질문과 답변을 이용해 대상으로부터 응답을 받아 결과를 도출해내는 보편적이고 효과 적인 수단이다. 
- 본 시스템은 웹 페이지와 모바일 어플리케이션을 이용해 쉽게 설문조사를 생성 및 참여 할 수 있 는 기능을 제공한다.
- 모든 설문 정보는 스마트 계약(Smart Contract)을 통해 블록 체인 네트워크를 구성하고 있는 피 어에 의해 검증되고 저장되어 위ㆍ변조가 불가능 하다
- 설문에 응답한 사용자는 보상으로 암호 화폐(Crypto Currency) 혹은 토큰(Token)을 지급받아 재화로 사용 할 수 있다.
- 설문의 투명성을 보장함과 동시에 설문조사에 참여율을 높여 설문조사에 대한 신뢰성을 높일 수 있는 플랫폼 시스템을 제안한다.

- - -

## 2. 사용기술 및 개발환경

![image](https://user-images.githubusercontent.com/38580908/82654356-8ffe8300-9c5b-11ea-8c45-839021e7a278.png)

#### 2.1 이더리움
- 이더리움은 블록체인 기술을 기반으로 스마트 계약 기능을 구현하기 위한 분산 컴퓨팅 플랫폼이다. 이더리움은 비트코인과 마찬가지로 이더(Ether)라는 암호 화폐 기능을 제공하고 있으며 화폐 거래 기록 뿐 아니라 계약 등의 추가 정보를 기록할 수 있는 장점이 있다.

#### 2.1.1 스마트 계약
- 스마트 계약은 계약의 협상 또는 체결을 디지털 방식으로 검증과 강제하는  컴퓨터 프로토콜이다. 비트코인은 결제, 송금 등 화폐 거래를 기록했었지만 이후의 블록체인 플랫폼에서는 스마트 계약을 사용해 블록체인의 활용을 더 확장시켰다. 정해진 계약 조건이 성립하면 자동으로 실행되기 때문에 개발자는 스마트 계약에 계약 성립 조건을 이용해 분산형 어플리케이션을 개발할 수 있다.

#### 2.1.2 토큰
- 이더리움은 Dapp에서 사용될 수 있는 스마트 계약을 통한 ERC20, ERC721 토큰을 지원한다.  ERC20 토큰은 현실에서 사용 되는 화폐와 같은 대체 가능한 암호 화폐이다.  내가 가진 10토큰과 다른 사람이 가진 10토큰은 동일한 가치를 지닌다는 말과 같다. ERC721 토큰은 반대로 각 토큰이 다른 가치를 가지고 있는 대체 불가능한 화폐이다.

#### 2.1.3 지갑(MetaMask)
- 지갑은 사용자가 소유한 암호 화폐를 보관하고 관리하는 기능을 제공하는 프로그램이다. 이더와 ERC20토큰을 지갑에서 사용할 수 있다.
  Dapp은 지갑을 이용해 화폐를 거래하거나 스마트 계약을 할 수 있다. 이더리움의 대표적인 지갑은 MetaMask로 웹 브라우저의 확장 프로그램 설치만으로 사용이 가능해서 많은 Dapp에서 사용 중이다.

#### 2.1.4 RPC
- 이더리움은 Geth를 통한 CLI 환경에서 명령어를 사용할 수 있다. 다른 어플리케이션에서 이더리움 노드의 명령을 수행하게 할 수 있도록 이더리움은 JSON RPC를 지원한다. 지갑과 Dapp 역시 RPC를 이용해 이더리움을 사용한다. RPC 통신을 더 편리하게 사용하고자 이더리움에서는 이후 언급할 web3라는 라이브러리를 공식 제공하고 있다.

#### 2.2 마이닝(Mining)
#### 2.2.1 채굴
- 거래 기록이 담긴 블록을 검증이 필요하다. 이 과정을 ‘채굴’이라 표현하는데 블록의 정보와 임의의 숫자를 이용해 블록을 검증한다. 이 때 많은 컴퓨팅 자원을 필요로 하기 때문에 검증에 가장 먼저 성공한 참여자는 이더로 보상을 받게 된다.

#### 2.2.2 합의 알고리즘(Consensus Algorithm)
- 이더리움은 합의 알고리즘으로 PoW를 사용한다. PoW는 블록의 검증 방법 중 하나로 “채굴자가 블록의 무결성을 확인했다는 것을 증명”하는 행위이다.

#### 2.3 언어
#### 2.3.1 Solidity
- Solidity는 이더리움의 스마트 계약 개발에 사용 되는 언어이다. 컴파일 결과로 바이트 코드와 ABI(Application Binary Interface)가 생성되는데 이를 이용해 이더리움에 배포하여 스마트 계약을 사용할 수 있다.
#### 2.3.2 web3.js
- web3.js는 이더리움이 공식적으로 지원하는 RPC 라이브러리인 web3의 자바스크립트용 SDK이다. 웹 기반의 Dapp을 개발할 때 프론트 엔드와 백 엔드 모두에 사용할 수 있어 자주 사용된다.

## 3. 제안 플랫폼

![image](https://user-images.githubusercontent.com/38580908/82654732-2468e580-9c5c-11ea-881a-7842a5718cba.png)

- Step 1. 스마트 계약 작성/배포 solidity를 이용한 스마트 계약 작성 블록체인 네트워크에 배포

- Step 2. 사용자/스마트 계약에 의한 트랜잭션 발생 Dapp을 통한 트랜잭션 발생
- Step 3. 노드들에 의한 검증(Confirmation) 노드들이 동일한 데이터 보유 ⇒ 데이터 투명성/신뢰성 보장



설문조사 생성의 경우 아래 그림과 같이 사용자는 설문조사 생성을 위해 제목, 총 보상 량, 보상 량에 대한 데이터를 입력하여야 하며 여기서 총 보상 량이란 설문조사에 모두 응답한 사용자에게 주어지는 보상 량의 총합을 뜻한다.

![image](https://user-images.githubusercontent.com/38580908/82655228-d3a5bc80-9c5c-11ea-956e-20e026cf2e38.png)


  그림 2는 사용자가 총 보상 5이더(5Eth)를 설문조사 생성 및 배포자가 지불하고 응답자에게 각 0.05이더를 보상하는 설문조사를 생성하는 화면이다. 아래 그림 3에서는 사용자가 설문조사를 생성했을 때 사용자의 지갑으로부터 보상 이더와 수수료를 지불하는 것을 보여주는 블록체인 암호 화폐 지갑 화면이다.




그림 3. 설문조사 생성 시 사용자 MetaMask


## 4. 핵심코드

Function
F1
Input : 설문제목, 보상수량
Output : 사용자 설문조사
Describe : 일정 보상을 지급하는 설문조사 생성 Tx발생
function createSurvey(bytes32 _title, uint _reward) public payable 
  address addr = (new Survey).value(msg.value)(_reward);
  title[addr] = _title;  surveys.push(addr);
  emit Created(addr);
F2
Input : 문항에 대한 응답
Output : -
Describe : 각 설문에 대한 응답을 해당 계약에 저장
function participate(bytes32[] _response) public payable
  require(address(this).balance > reward);
  require(questions.length == _response.length);
  require(!logs[msg.sender].isExist);
  logs[msg.sender].answers = _response;
  logs[msg.sender].isExist = true;
  for (uint i=0; i<_response.length; i++)
    questionMapping[questions[i]]
      .answerMapping[_response[i]]++;}
  msg.sender.transfer(reward);
  다음으로 설문을 생성한 사용자는 각 설문 문항을 추가해야 한다. 질의 하고자하는 문항을 입력하고 그에 대한 답안을 기입하여 설문 문항을 완성한다. 아래 그림 4는 설문 문항 추가하기 위한 화면이다. 




그림 4. 설문 문항 생성 예시

  마지막으로 설문 문항 추가 작업을 모두 마치고 나면 설문조사가 생성된다. 아래 그림 5에서는 위 절차를 통해 생성한 설문조사가 실제 응답자에게 보여 지는 화면이다. 각 문항에 대한 결과는 도넛차트 통해 실시간으로 확인 할 수 있으며, 응답자는 각각의 설문 문항에 대해 적절한 선택지를 선택 후 제출하면 설문이 완료된다. 이로써 응답자는 0.05이더의 보상을 획득하게 되며, 완료된 설문의 데이터는 스마트 계약에 저장 된다.




그림 5. 설문조사 참여
  3.3 분산원장과 스마트 계약
  주 계약은 모든 설문조사를 관리한다. 이를 위해 주 계약은 설문조사의 제목, 보상 량 등 기본 정보를 저장한다. 설문조사를 생성할 때 주 계약을 통해 새로운 설문조사 계약을 생성하고 설문조사 생성자는 이 계약에 질문과 답변을 설정한다. 설문조사 응답자는 생성된 설문조사 계약을 통해 설문조사에 참여할 수 있다. 설문조사의 결과와 참여한 설문조사의 응답 내용이 설문조사 계약에 기록된다.
  설문조사를 생성하고 설문조사에 참여하는 등 계약에 저장되는 데이터가 변경될 때 블록체인의 피어를 통해 검증이 되고 확인이 되면 데이터가 모든 피어들에 분산원장으로 기록된다.
  3.3.1 스마트 계약 주요 Fuction


  본 논문에서 소개하는 플랫폼은 위에서 언급한 스마트 계약을 이용한 Dapp개발 방법을 사용하였다. 그림 1에서 사용자가 실제로 사용하게 되는 부분은 웹 페이지를 통해 제공되는 Dapp이며, Solidity로 구현 된 스마트 계약에서 설문조사의 질문과 답변 및 응답 결과에 대한 데이터를 처리한다. 사용자가 설문조사를 생성하고 설문조사에 참여할 때 Dapp내에서는 블록체인 네트워크와 데이터를 주고받기위해 web3.js를 통해 JSON RPC 통신을 수행하며 이 과정 중에 수수료나 보상에 대한 정보를 MetaMask를 통해 확인 할 수 있다.


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
