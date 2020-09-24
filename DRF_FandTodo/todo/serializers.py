# from account.models import User
from .models import TodoGroup, Todo, FavouriteGroup, Favourite
# from django.contrib.auth import get_user_model
# from rest_framework import serializers
from rest_framework.serializers import ModelSerializer, Serializer
# from rest_framework.validators import ValidationError
# import re

# class UserSerializer(ModelSerializer):
#     class Meta:
#         model = User #get_user_model()
#         fields = ['username','email','phone_number']


class TodoGroupSerializer(ModelSerializer):
        class Meta:
            model = TodoGroup
            fields = '__all__'

    # reg_user_username = serializers.ReadOnlyField(source='reg_user.username')
    # reg_user_email = serializers.ReadOnlyField(source='reg_user.email')
    
    # def get_test(self, obj):
    #     return '내이름은 ' + obj.name

    # def get_test2(self, obj):
    #     return '오호정'

    #reg_user = UserSerializer(read_only=True) #등록때 사용하지않겠다.
    # reg_user_username = serializers.ReadOnlyField(source='reg_user.username')
    # reg_user_email = serializers.ReadOnlyField(source='reg_user.email')

    # test = serializers.SerializerMethodField()

    # def get_test(self, obj):
    #     return obj.address + " (" + obj.name + ")"


class TodoSerializer(ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'


        # class Meta:
        #     model = Todo
        # fields = ['seq','name','status','reg_date','end_date','group']
    # reg_user = UserSerializer()
    # username = serializers.ReadOnlyField(source="reg_user.username")
    # email = serializers.ReadOnlyField(source="reg_user.email")
    # phone_number = serializers.ReadOnlyField(source='reg_user.phone_number')

    # # 이런것도 가능
    # # reg_date 데이터가 있다면
    # reg_date = serializers.DateField(format="%Y")
    # data_sum = serializers.SerializerMethodField()
    # # 합계도 가능
    # def get_data_sum(self, obj):
    #     return obj.math + obj.science + obj.english

    ###################### validate체크 함수 가져다쓰자!!!!!!####################################
    # #항목 하나 하나  체크용
    # def validate_name(self, value):
    #     # 정규표현식, 숫자체크 용도로 활용
    #     if len(vlaue) > 3:
    #         raise ValidationError("3글자 이상 입력해주세요!")
    #     return value

    # #항목 여러개 체크용
    # 체크 결과는 위아래 같지만 에러메시지표현이 아래는 항목안나옴
    # def validate(self, value):
    #     if len(value["name"]) < 3:
    #         raise ValidationError("3글자 이상 입력해 주세요!")
    #     return value

    # 조건 규칙 확인
    # def validate_math(self, math):
    #     if not(0 < math < 100):
    #         raise ValidationError("0~100 사이만 입력해주세요!")
    #     return math
    
    # #이메일 규칙 확인
    # def validate_email(self, value):
    #     result = re.match("[a-zA-Z0-9]+@[a-zA-Z.0-9]+", value)
    #     if result == None:
    #         raise ValidationError("이메일 형식을 확인해주세요")
    #     return value

    # #핸드폰 번호 규칙 확인
    # def validate_phone_number(self, value):
    #     result = re.match("[0-9]{3}-[0-9]{3,4}-[0-9]{3,4}", value)
    #     if result == None:
    #         raise ValidationError("전화번호 형식이 맞지않습니다.")
    #     return value


class FavouriteGroupSerializer(ModelSerializer):
    class Meta:
        model = FavouriteGroup
        fields = '__all__'


class FavouriteSerializer(ModelSerializer):
    class Meta:
        model = Favourite
        fields = '__all__'