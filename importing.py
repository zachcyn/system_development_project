import pymongo
import os
import re
import pandas

def isRoundImport(filename):
    format   = re.match(r'(.*?) ROUND (\d+) (.*?).csv', filename)
    tournamentName, round, gender = format.groups()
    print("Extracted:", tournamentName, round, gender)
    if tournamentName and (round) and (gender == "MEN" or gender == "LADIES"):
        return True
    else:
        return False

def handle(file):
    fileExt = file.name.rsplit('.', 1)[1].lower()
    if fileExt == 'csv':
        if file.name == 'FEMALE PLAYERS.csv':
            pass #
        elif file.name == 'MALE PLAYERS.csv':
            pass #
        elif file.name == 'RANKING POINTS.csv':
            pass #
        elif file.name == 'PRIZE MONEY.csv':
            pass #
        else:
            isRoundImport(file.name)
    elif fileExt == 'docx':
        if file.name == 'DEGREE OF DIFFICULTY PER TOURNAMENT.docx':
            pass #
        
uri = "mongodb+srv://dev:dev123@tennisdata.fxv0bhm.mongodb.net/"
client = pymongo.MongoClient(uri)
maledb =client.MaleData
fmaledb =client.FemaleData
 
# assign directory
directory = 'Upload'

for filename in os.scandir(directory):
    if filename.is_file():
        print("File found:",filename.name)
        handle(filename)
        
def Insert(self, element):
    table = self.tables[str(type(element))]
    self.cursor = table.insert_one(element.__dict__)

def Select(self, element):
    table = self.tables[str(type(element))]
    cursor=list(table.find(element.__dict__))
    if len(cursor) == 0:
        self.cursor = [None]
    else:
        self.cursor = cursor

    return self.cursor

def Update(self,element,newElement):
    table = self.tables[str(type(element))]
    self.cursor = table.find_one_and_update(element.__dict__,{"$set":newElement.__dict__})

def Delete(self,element):
    table = self.tables[str(type(element))]
    self.cursor = table.delete_many(element.__dict__)