import ee
import datetime

# Authenticate to the Earth Engine servers
ee.Initialize()

# Define region of interest (Dschang, Cameroon)
roi = ee.Geometry.Point(10.0696, 5.4431)  # Latitude, Longitude

# Define time period for weather data (e.g., last 30 days)
end_date = datetime.datetime.now()
start_date = end_date - datetime.timedelta(days=30)

# Filter weather data (e.g., precipitation)
collection = ee.ImageCollection('ECMWF/ERA5_LAND/HOURLY') \
    .filterBounds(roi) \
    .filterDate(start_date, end_date) \
    .select('total_precipitation')

# Calculate total precipitation for the time period and region
total_precipitation = collection.sum().clip(roi)

# Get precipitation value at the specified location
precipitation_value = total_precipitation.reduceRegion(ee.Reducer.mean(), roi, 1000).get('total_precipitation')

# Print average precipitation value
print("Average precipitation (mm) in the last 30 days:", precipitation_value.getInfo())
