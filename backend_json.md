### 1. Root Endpoint (`GET /`)

**Input:** No input required for this endpoint.

**Output:**
```json
{
  "message": "Hello World"
}
```

### 2. Swipe Endpoint (`POST /swipe`)

**Input:**
```json
{
  "id_list": ["user1", "user2", "user3"],
  "spice_list": [0, 0, 0]
}
```
`spice_list` is optional, otherwise takes in 0-1 float value. 1 means it will return food that is really random from what the user's preferences are, 0 means it will be based on that user's preferences

**Output:**
```json
{
  "items": [
    {"name": "Hokkien Mee", "description": "Noodles with seafood", "url": "image url"},
    {"name": "Nasi Lemak", "description": "Rice but better", "url": "image url"},
    {"name": "Chicken Rice", "description": "Chicken with rice", "url": "image url"},
    {"name": "Bak Kut Teh", "description": "Hot soup", "url": "image url"},
    {"name": "Fries", "description": "Fried potato", "url": "image url"}
  ]
}
```

### 3. Process Endpoint (`POST /process`)

**Input:**
```json
{
  "swipes": [
    [
      {"userid": "a", "swiped": ["Hokkien Mee", "Nasi Lemak"]},
      {"userid": "b", "swiped": ["Nasi Lemak"]},
      {"userid": "c", "swiped": ["Chicken Rice"]},
      {"userid": "d", "swiped": ["Fries"]}
    ]
  ],
  "foods": ["Hokkien Mee", "Nasi Lemak", "Chicken Rice", "Bak Kut Teh", "Fries"],
  "lat": 13.6123,
  "lon": 131.61923,
}
```

**Output:**
```json
{
  "result": [
    {"name": "Nasi Lemak", "votes": 2, "restaurant": [{"id": "abc123", "name": "MalayFoods", "rating": 4.4, "distance": 421}, {"id": "def123", "name": "BestDiner", "rating": 3.1, "distance": 55}]},
    {"name": "Hokkien Mee", "votes": 1, "restaurant": []},
    {"name": "Chicken Rice", "votes": 1, "restaurant": []},
    {"name": "Bak Kut Teh", "votes": 1, "restaurant": []}
  ]
}
```
*Note: The "restaurant" arrays for "Hokkien Mee", "Chicken Rice", and "Bak Kut Teh" are intentionally left empty as placeholders. Populate them as necessary.*

### 4. Restaurant Info Endpoint (`GET /restaurant/{restaurant_id}`)

**Input:** No JSON input required. The `restaurant_id` is provided in the URL path.

**Output (example for restaurant_id = abc123):**
```json
{
    "id": "ChIJJ_15it4P2jERKqXEo1kYf14",
    "name": "Takagi Ramen @ Jurong West",
    "rating": {
        "overall": 4.3,
        "food": 4.5,
        "service": 4.1,
        "environment": 3,
        "value": 5
    },
    "review": "Diverse menu with enjoyable dishes, excellent service, affordable prices, and heartwarming touches. Some cleanliness concerns during late night hours.",
    "image_url": "https://lh3.googleusercontent.com/places/ANXAkqHcxu9xoEf7inAUYAnjIJf4t8jViJDeupSGX1SymxRriSwBr-4G_GvN0qkYk68SckWirB0ab3LCiARCHnU9iGH00TYdkxhRSIs=s4800-w400",
    "map_url": "https://maps.google.com/?cid=6809187934886208810"
}
```

These examples provide a clear and consistent JSON structure for both requests and responses, enabling your frontend team to integrate efficiently with the backend API.
