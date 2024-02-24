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
  "id_list": ["user1", "user2", "user3"]
}
```

**Output:**
```json
{
  "items": [
    {"name": "Hokkien Mee", "description": "Noodles with seafood"},
    {"name": "Nasi Lemak", "description": "Rice but better"},
    {"name": "Chicken Rice", "description": "Chicken with rice"},
    {"name": "Bak Kut Teh", "description": "Hot soup"},
    {"name": "Fries", "description": "Fried potato"}
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
  "foods": ["Hokkien Mee", "Nasi Lemak", "Chicken Rice", "Bak Kut Teh", "Fries"]
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
  "id": "abc123",
  "name": "MalayFoods",
  "rating": {
    "overall": 4.4,
    "food": 3.5,
    "service": 4,
    "environment": 5,
    "value": 2
  },
  "reviews": [
    {"rating": 4, "content": "not bad, i like it haha"},
    {"rating": 1, "content": "disgusting food sia"}
  ],
  "url": "https://maps.google.com/"
}
```

These examples provide a clear and consistent JSON structure for both requests and responses, enabling your frontend team to integrate efficiently with the backend API.
