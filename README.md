# NutriFlex - CodeBrew 2024

Coded by Rooptop Coders in CodeBrew 2024.

![public/screenshot-20240405-at-603-1@2x.png](public/screenshot-20240405-at-603-1@2x.png)

## Inspiration
In many parts of the world, particularly in developed countries such as Australia, 
over-nutrition and obesity are significant concerns. Diets high in processed foods, sugars, unhealthy fats, 
and low in fruits, vegetables, and whole grains contribute to this imbalance.
While over-nutrition is a problem in many regions, malnutrition persists as a significant issue, particularly in developing countries. This includes under-nutrition (not consuming enough nutrients), as well as micronutrient deficiencies such as iron, iodine, and vitamin A deficiencies.
Poor nutrition is associated with a range of health problems, including cardiovascular disease, diabetes, certain cancers, and micronutrient deficiencies leading to conditions like anemia, goiter, and night blindness.

So what can modern tech do to help addressing this global nutrition challenge? What is the main reason behind nutrition imbalance? By our survey and observation, one major reason is that people do not have sufficient knowledge about the nutrition in their daily food!

It will clearly not possible for everyone to be an expert in nutrient and keep track on their daily meal, so the Rooftop Coders
decide to lend a helping hand by utilizing modern AI technology, computer vision along with knowledge in daily nutrition intake, we
developed NutriFlex aiming to help users get to know their food, understanding what nutrients are in their food and getting advices on 
daily nutrient intake.

## What is NutriFlex
NutriFlex is a webApp serving as a nutrient expert, it gives suggestions on your daily nutrient intake amount and also helps you keep tracking on the nutrient you eat.
User just need to enter their physical information such as age, gender, weight and diet preference, and taking a picture on 
their food, NutriFlex will detect the food type in the food photo and calculate the nutrient in it. Every meal's nutrition data will be stored in the app and by utilizing AI, 
NutriFlex will let user know whether their nutrient intake is within a healthy range.

## How NutriFlex achieve it
For the UI/UX we used Figma to design our app.

For the backend, we use Google Vision API for image labeling and GPT 3.5 API for nutrient information. The code are mainly written in Node.js and label
selection part is written in python. 

The flow of work begin with user's web browser or webapp requests the pages on server, then user upload a photo of food from either camera or local file,
then NutriFlex will use Google Cloud Vision API on image labeling and image localization to generate sets of possible food labels. These labels will be 
cross selected from our food type data to output the final food type label. Next the label will be feed to OpenAI API to return the nutrient information within those 
food types along with each nutrient's amount, these data will be stored in database and compared with recommend nutrient 
intake amount for user's physical information to give the final nutrition advice.

## Challenges we ran into
The biggest challenge we got is how to make a function to let user using either camera or upload file from frontend UI to backend so
that we can perform further actions on the photo, this challenge is tackled by examine multiple webapps with similar function and trying to reverse the code
from these websites.

## Achievements we are proud of
In NutriFlex, we select a unique idea by aiming at the common social problem and trying to deliver a solution by utilizing modern edge technology, with help of existing APIs and 
help from artificial intelligence, we managed to deliver a functional webapp from very bottom in a short amount of time.

## What we learned
1) Interaction between frontend and backend.
2) Deploy API and maintain artificial intelligence model.
3) High pressure coding and debugging.
4) The impact of modern technology can do to traditional social problems.

## Future improvements
1) More detailed product level food type database for a better food type detection.
2) Deploy an offline database on nutrient of common food type to avoid unnecessary GPT API usage.
3) Deploy a fine-tuned image labeling model with specific training on food for better food labelling.
4) More user customization option on physical information to create more in person nutrient suggestion.

## <a name="prevAndRun">Preview and Run the project</a>
### <a name="setupBackendENV">Setup Backend .env</a>
1) Navigate to the **backend**
2) Edit **.env** (Create one if not exist)


### <a name="prevEntire">Entire Project</a>
1) Navigate to the **project root folder**
2) Install dependencies: `npm run install:concurrently`
3) Run Entire project and view it in browser: `npm run start:concurrently`

### <a name="prevFrontend">Frontend Only</a>
1) Navigate to the **project root folder**
2) Install dependencies: `npm install:frontend`
3) Run Frontend Only and view it in browser: `npm run start:frontend`

### <a name="prevBackend">Backend Only</a>
1) Navigate to the **project root folder**
2) Install dependencies: `npm install:backend`
3) Run Backend Only and view it in browser: `npm run start:backend`
