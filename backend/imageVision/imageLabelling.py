import os

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'diesel-patrol-419400-a39379bed88b.json'

result_labels = set()
def detect_labels(path, result_labels = result_labels):
    """Detects labels in the file."""
    from google.cloud import vision

    client = vision.ImageAnnotatorClient()

    with open(path, "rb") as image_file:
        content = image_file.read()

    image = vision.Image(content=content)

    response = client.label_detection(image=image)
    labels = response.label_annotations

    for label in labels:
        des = label.description
        result_labels.add(des.lower())

    if response.error.message:
        raise Exception(
            "{}\nFor more info on error messages, check: "
            "https://cloud.google.com/apis/design/errors".format(response.error.message)
        )

def localize_objects(path, result_labels = result_labels):
    """Localize objects in the local image.

    Args:
    path: The path to the local file.
    """
    from google.cloud import vision

    client = vision.ImageAnnotatorClient()

    with open(path, "rb") as image_file:
        content = image_file.read()
    image = vision.Image(content=content)

    objects = client.object_localization(image=image).localized_object_annotations

    #print(f"Number of objects found: {len(objects)}")
    for object_ in objects:
        result_labels.add(object_.name.lower())

def get_labels(path):
    result = set()
    detect_labels(path, result)
    localize_objects(path, result)
    return result
