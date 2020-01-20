        function calculateDistance(lat1, lon1, ele1, lat2, lon2, ele2) {
            if ((lat1 == lat2) && (lon1 == lon2) && (ele1 == ele2)) {
                return 0;
            } else {
                let radlat1 = Math.PI * lat1 / 180;
                let radlat2 = Math.PI * lat2 / 180;
                let theta = lon1 - lon2;
                let radtheta = Math.PI * theta / 180;
                let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(
                    radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180 / Math.PI;
                dist = dist * 60 * 1.1515;
                dist *= 1.609344;
                dist *= 1000;
                var height;
                if (ele1 > ele2) {
                    height = (ele1) - (ele2);
                } else {
                    height = (ele2) - (ele1);
                }
                if (height == 0) {
                    dist = dist;
                } else {
                    hypotenuse = Math.sqrt((dist * dist) + (height * height));
                }
                dist /= 1000;
                return dist;
            }
        }

        function calculateTiredness(i) {
            let value = 10;
            let tiredness = (((i / trekPoints.length) / (i / trekPoints.length + value)) + 1);
            return tiredness
        }

        function calculateProwess(experience) {
            let prowess;
            switch (experience) {
                case "beginner":
                    prowess = 0.85
                    break;
                case "novice":
                    prowess = 0.88
                    break;
                case "good":
                    prowess = 0.91
                    break;
                case "advanced":
                    prowess = 0.94
                    break;
                case "experienced":
                    prowess = 0.97
                    break;
                case "pro":
                    prowess = 1
                    break;
                default:
                    prowess = 1;
            }
            return prowess
        }

        function calculateRain(rainGauge) {
            let weather;
            switch (rainGauge) {
                case "downpour":
                    weather = 0.85;
                    break;
                case "rain":
                    weather = 0.90;
                    break;
                case "sprinkling":
                    weather = 0.95;
                    break;
                case "clearWeather":
                    weather = 1;
                    break;
                default:
                    weather = 1;
            }
            return weather
        }

        function calculateSteepness(ele1, ele2) {
            let steepness = ((ele2 - ele1) / ele2) + 1;
            return steepness
        }