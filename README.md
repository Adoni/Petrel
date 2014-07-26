#Introduce

This is an application to make our life more efficient.

#Some ideas

##Attributions:

###User:

|Attribution|Meaning|
|---|:---|:---:|
|uid|The unique mark of this user|
|password|The password of this user|
|current_plans|pids of the plans which created by this user and still activated|
|finished_plans|pids of the plans which created by this user but already finished|
|closed_plans|pids of the plans which created by this user but closed before being finished|

###Plan (include all kind of plans):

|Attribution|Meaning|
|---|:---|:---:|
|pid|The unique mark of this plan|
|starting_time|The password of this user|
|time_to_finish|The password of this user|
|content|The content (aim) of this plan, support markdown grammar|
|state|0:ongoing; 1:off; 2:finished|
|tasks|A list of tids which presents the tasks of each day for this plan|

###Task (include all kind of plans):

|Attribution|Meaning|
|---|:---|:---:|
|tid|The unique mark of this plan|
|content|The content of this task, support markdown grammar|
|date|The date of this task|
|comment|Some comments of this task, support markdown grammar|
|state|0:ongoing; 1:finished; 2:not finished;|
