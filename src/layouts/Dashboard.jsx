import React from "react";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";


export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories></Categories>
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/products" component={ProductList}/>
            <Route path="/products/:id" component={ProductDetail}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
