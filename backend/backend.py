import time
from test import *
import requests
import urllib.request
from urllib.parse import quote
import pprint
import json

from flask import Flask, jsonify


app = Flask(__name__)

@app.route('/')
def index():
    # business_response = client.business.get_by_id('yelp-san-francisco')
    # print(business_response[0])
    return 'Index page'


@app.route('/restaurant')
def get_business_id():
    resp = query_businesses("Sushi", "Markham") 
    # id = resp['businesses'][0]['id']
    id = resp['businesses'][0]
    print(id)

    return {'restaurant' : id}


@app.route('/restaurants')
def get_list_business():
    resp = query_businesses("Sushi", "Markham") 
    # id = resp['businesses'][0]['id']
    id = resp['businesses']
    print(id)

    return {'restaurants' : id}
    

@app.route('/list')
def get_businesses():
    ## Returns list of businesses that follow this 
    resp = query_businesses("Sushi", "Markham") 
    
    # return resp
    return resp
    # return json.loads(resp)

get_list_business()