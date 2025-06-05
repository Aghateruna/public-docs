---
description: A scoring system to recognize real onchain builders.
---

# Builder Score

## What is the Builder Score?

Builder Score is a numerical value that represents a user's reputation as an onchain builder.&#x20;

The Builder Score aims to distinguish builders from other types of crypto users, by valuing both the quantity and quality of their contributions. It reflects both "potential" (future growth) and "achievements" (proven track record).

Users can leverage their Builder Score within Talent Protocol's growing partner ecosystem, while developers can easily add the Builder Score to their apps.&#x20;

Apps like [Basenames](https://x.com/TalentProtocol/status/1825995151275434439) or [Etherscan](https://x.com/TalentProtocol/status/1830974248363622607) already integrate with the Builder Score to bring more context to their users and to curate the best builders in crypto.

## The "Builder Score" Scoring Framework

All Talent Protocol scoring systems are composed of a selection of [Data Points](../../data-point.md). While we don't disclose the exact formula to prevent gaming, we can share that each Data Point is evaluated based on:

1. value conversion (when applicable)
2. signal strength
3. max score
4. multiplier (not publicly disclosed)

### 1. Value Conversion

For some Data Points it's helpful to normalized their numerical value before applying the scoring function, but this is an optional step.

Examples:

* Convert `twitter_account_age` from a `timestamp` to the `number of years` the account has.
* Normalize `base_out_transactions` with a `sqrt` function to reduce the impact of large values, making the scoring system more balanced and fair, and ensuring big contributors don’t completely overpower smaller ones. This means that your first contributions matter more than later ones.&#x20;
* Invert `farcaster_social_capital_rank` value, so that the #1 ranked user has a higher value (and more points) than the last ranked user.

### 2. Signal Strength

Defines how strongly a given data point proves that the user is a real builder, and can have 3 possible values: `weak`, `medium`, `strong.`

Examples:

* Winning a ETHGlobal hackathon is a strong signal that someone is a real builder.
* Simply having a GitHub account is a weak signal that someone  is a real builder.

### 3. Max Score

Defines the maximum amount of points each Data Point can contribute to the overall Builder Score. We use the signal strength to help define the max score of each Data Point:

* strong (up to 40 points)
* medium (up to 20 points)
* weak ( to 8 points)

{% hint style="info" %}
The mapping between signal strength and max score is just a framework for human decision, not enforced at the code level.
{% endhint %}

### 4. Multiplier

In the Builder Score, we use multipliers to convert the numerical value of a Data Point into a score measured in "points." These multipliers help standardize very different scales of Data Point values into a consistent scoring system.

Although we don't disclose the exact multipliers used for each Data Point, users can understand the relative importance of each Data Point through the signal strength and max score values we provide.

<details>

<summary>Examples</summary>

* Data Point: Base Contracts Deployed (Mainnet)
  * Value: 7 (number of contracts deployed)
  * Multiplier: 0.2
  * Max Score: 2
  * Points: 1.4 (7\*0.2)

- Data Point: GitHub Total Contributions
  * Value: 1734
  * Multiplier: 0.001
  * Max Score: 15
  * Points: 1.734 (1734\*0.001)

</details>

{% hint style="warning" %}
Builder Score is still experimental, so expect regular updates to its scoring formula.
{% endhint %}



## Transparency and Formula Disclosure

At Talent Protocol, we believe in transparency while maintaining the integrity of our scoring system. We disclose the general framework of our Builder Score calculation, including:

* The Data Points we consider relevant
* The signal strength classification for each Data Point
* The maximum score potential for each Data Point

However, to prevent gaming or artificial optimization of the system, we do not publicly disclose:

* Specific multipliers for each Data Point
* Exact conversion functions applied to normalize values
* Detailed thresholds for achieving maximum scores

This approach allows us to maintain the integrity of the Builder Score while still providing users with clear guidance on how to improve their scores through genuine contributions.



## Summary

The Builder Score represents 3 core decisions:

1. What Data Points are relevant to assess the reputation of a builder.
2. How strongly does each Data Point signal that the user is a real builder.
3. What should be the multiplier to convert each Data Point value into Builder Score points.

The final Builder Score is the sum of all the points.

Builder Score doesn’t have a maximum cap, so it’s likely to increase over time, as we add more integrations and possible credentials to the protocol.
