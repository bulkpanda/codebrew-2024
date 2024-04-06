# import imageLabelling
import sys
import json


def label_image(names):
    candidate_label = []
    with open(r'imageVision/product_classes.txt', 'r', encoding='utf-8') as file:
        lines = file.readlines()
        for l in lines:
            l = l[:-1]
            candidate_label.append(l.lower())
    label = set()
    
    for i in names.lower().split("$"):
        if i in candidate_label:
            label.add(i)
    return label




if __name__ == "__main__":
    names = sys.stdin.read()
    try:
        label = label_image(names)
        label = list(label)
        print(json.dumps(label))
    except Exception as e:
        print(json.dumps(str(e)))

    
    