# FotMob API Reference

## Endpoints

### Matches by Date

`GET`

<https://www.fotomob.com/matches?date={date}>

Dates are formatted like so: `20200814`

### Leagues

`GET`

<https://www.fotmob.com/leagues>

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

<https://www.fotmob.com/teams>

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

#### Example Response

### Player

`GET`

<https://www.fotmob.com/playerData?id={id}>

### Match Details

`GET`

<https://www.fotmob.com/matchDetails?matchId={matchId}>

### Search

`GET`

<https://apigw.fotmob.com/searchapi/suggest?term={term}&lang={lang}>
