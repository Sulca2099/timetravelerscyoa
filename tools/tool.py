print("Public domain, NOT APART OF GAME\rMEANT FOR MODDING PURPOSES AND EASE OF\rUSE.")
description=input("enter description here: ")
directions=[]#without dependencies, with dependencies
class gotoobj():
  def __init__(self,name,type,dependencies):
    self.name=name
    self.type=type
    self.specs=[]
    self.dependencies=dependencies
  def runquestions(self):
    if type==0:
      self.specs=[input("claimable? ")]
      if self.dependencies:
        self.dependencies=input("required property in list? ")
    if type==1:
      self.specs=[input("input dependency code all, dino, none:"), [input("look when burned: "),input("natural: ")] if input("burnable? ").lower()=="y" else input("look natural: ")]
while(True):
  dire=gotoobj(input("name: "),input("type 0-object 1-object: "),input("dependencies? y/n: "))
  dire.runquestions()
print()
  
      
