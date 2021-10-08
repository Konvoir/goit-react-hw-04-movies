import { lazy, Suspense } from 'react';
import { Route, Switch  } from "react-router-dom";

const Navigation = lazy(() =>
import('./components/Navigation/Navigation'))