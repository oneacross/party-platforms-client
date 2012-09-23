#!/usr/bin/env python

import web
import json

urls = (
    '/sentences', 'sentences',
)

class sentences:
    def GET(self):
        collection = [
            {'text': "Four years ago, Democrats, independents, and many Republicans came together as Americans to move our country forward."},
            {'text': "We were in the midst of the greatest economic crisis since the Great Depression, the previous administration had put two wars on our nation&#x2019;s credit card, and the American Dream had slipped out of reach for too many."},
            {'text': "Today, our economy is growing again, al-Qaeda is weaker than at any point since 9/11, and our manufacturing sector is growing for the first time in more than a decade.", 'issues': ['economy']},
            {'text': "But there is more we need to do, and so we come together again to continue what we started."},
            {'text': "We gather to reclaim the basic bargain that built the largest middle class and the most prosperous nation on Earth &#x2013; the simple principle that in America, hard work should pay off, responsibility should be rewarded, and each one of us should be able to go as far as our talent and drive take us.", 'issues': ['middle class']}
        ]
        web.header('Content-Type', 'application/json')
        return json.dumps(collection)

if __name__ == '__main__':
    app = web.application(urls, globals())
    app.run()
