# FotMob API Reference

## Endpoints

### Matches by Date

`GET`

<https://www.fotmob.com/api/matches?date={date}>

Dates are formatted like so: `20200814`

### All Leagues

`GET`

<https://www.fotmob.com/api/allLeagues>

### Leagues

`GET`

<https://www.fotmob.com/api/leagues>

#### URL Parameters

```json
{
  "id": "42",
  "tab": "overview",
  "type": "league",
  "timeZone": "America/New_York"
}
```

- `tab`: overview | matches | stats

### Team

`GET`

<https://www.fotmob.com/api/teams>

<!-- markdownlint-disable MD024 -->
#### URL Parameters
<!-- markdownlint-enable MD024 -->

```json
{
  "id": "6017",
  "tab": "overview",
  "type": "team",
  "timeZone": "America/New_York"
}
```

- `tab`: overview | squad | fixtures | transfers

### Player

`GET`

<https://www.fotmob.com/api/playerData?id={id}>

### Match Details

`GET`

<https://www.fotmob.com/api/matchDetails?matchId={matchId}>

### World News

`GET`

<https://www.fotmob.com/api/transfer>

#### URL Parameters

```json
{
  "lang": "en",
  "page": "1",
}
```

### Transfers

`GET`

<https://www.fotmob.com/api/transfers>

### Search

`GET`

<https://apigw.fotmob.com/searchapi/suggest?term={term}&lang={lang}>

### New Custom Endpoint

`GET`

<https://apigw.fotmob.com/{endpoint}?{query}>

