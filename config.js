'use strict';

const WIT_TOKEN = process.env.WIT_TOKEN
if (!WIT_TOKEN) {
  throw new Error('Missing WIT_TOKEN. Go to https://wit.ai/docs/quickstart to get one.')
}


var FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN || 'EAACdX9HES4kBAHPmuANZAs7jRrVozbPTsZB7REFEfzwkZAXKId4Lb6ZA3pecZCckHNTsBnkEYfNGGKM2cbfjMUVM9yK78lRnqRZBzQWuRtXbVVJYABFqSq2Ej09NmwBBR300e6hvNi67kz44O7gjsxvDcMPNrEiDglYm7aIXK8nHy5MDb1kJBa';
if (!FB_PAGE_TOKEN) {
	throw new Error('Missing FB_PAGE_TOKEN. Go to https://developers.facebook.com/docs/pages/access-tokens to get one.')
}

var FB_VERIFY_TOKEN = process.env.FB_VERIFY_TOKEN || 'just_do_it'

module.exports = {
  WIT_TOKEN: 'UYM4LIYIBQXUAO6BB4DUWO4W7V5C6ZSK',
  FB_PAGE_TOKEN: 'EAACdX9HES4kBAHPmuANZAs7jRrVozbPTsZB7REFEfzwkZAXKId4Lb6ZA3pecZCckHNTsBnkEYfNGGKM2cbfjMUVM9yK78lRnqRZBzQWuRtXbVVJYABFqSq2Ej09NmwBBR300e6hvNi67kz44O7gjsxvDcMPNrEiDglYm7aIXK8nHy5MDb1kJBa',
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
}