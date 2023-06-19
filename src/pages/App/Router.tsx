import { Route, Switch } from 'wouter';
import { ActivityFeed } from '../ActivityFeed';
import { Review } from '../Review';
import { Login } from '../Login';

export const AppRouter = () => {
  return (
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/review" component={Review} />
        <Route path="/activity" component={ActivityFeed} />
      </Switch>
  );
};