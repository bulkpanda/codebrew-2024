# create nu_dict
def create_nu_dict():
    nutrients = ['Calories', 'Carbohydrates', 'Proteins', 'Fats', 'Fiber', 'Vitamins and Minerals', 'Water']
    nu_dict = {}
    for i in nutrients:
        nu_dict[i] = 0

    return nu_dict

# daily intake
def get_gender_intake(gender):
    intake_dict = create_nu_dict()
    if gender == 'male':
        intake_dict['Calories'] = 2750 #kcal
        intake_dict['Carbohydrates'] = 340 #g
        intake_dict['Proteins'] = 60 #g
        intake_dict['Fats'] = 220  # g
        intake_dict['Fiber'] = 34  # g
        intake_dict['Vitamins and Minerals'] = 2  # g
        intake_dict['Water'] = 2  # L
    else:
        intake_dict['Calories'] = 2000  # kcal
        intake_dict['Carbohydrates'] = 250  # g
        intake_dict['Proteins'] = 44  # g
        intake_dict['Fats'] = 120  # g
        intake_dict['Fiber'] = 23  # g
        intake_dict['Vitamins and Minerals'] = 2  # g
        intake_dict['Water'] = 2  # L

    return intake_dict

def get_daily_intake():
    daily_intake = create_nu_dict()
    return daily_intake

def update_daily_intake(daily_intake, list):
    assert(len(list) == 7)
    nutrients = ['Calories', 'Carbohydrates', 'Proteins', 'Fats', 'Fiber', 'Vitamins and Minerals', 'Water']
    for i in range(7):
        daily_intake[nutrients[i]] = list[i]
    return daily_intake

def daily_result(daily_intake, gender):
    output = []
    intake_dict = get_gender_intake(gender)
    nutrients = ['Calories', 'Carbohydrates', 'Proteins', 'Fats', 'Fiber', 'Vitamins and Minerals', 'Water']
    for i in nutrients:
        value = intake_dict[i]
        min = 0.9*value
        max = 1.1*value
        if daily_intake[i] < min:
            text = f'Your {i} intake is BELOW recommend level.\n'
            output.append(text)
        elif daily_intake[i] > max:
            text = f'Your {i} intake is ABOVE recommend level.\n'
            output.append(text)
        else:
            text = f'Your {i} intake is within recommend level.\n'
            output.append(text)

    return output

daily_intake = get_daily_intake()
list = [2500, 300, 120, 400, 10, 2, 1]
daily_intake = update_daily_intake(daily_intake, list)
output = daily_result(daily_intake, 'male')

for i in output:
    print(i)