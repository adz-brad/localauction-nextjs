import * as Realm from 'realm-web'
import { auctions } from './schema'

const useRealm = (realmFunction) => {

    const app = new Realm.App({ id: "localauction-jwktq" });

    const credentials = Realm.Credentials.anonymous();
        try {
            const user = await app.logIn(credentials);
        } catch(err) {
            console.error("Failed to log in", err);
    }
    const realm = await Realm.open({
        schema: [ userSchema ],
        sync: {
          user: app.currentUser,
        },
      })
    
}