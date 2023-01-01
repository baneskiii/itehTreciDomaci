import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import HoneyTypes from "./components/HoneyTypes";
import Origin from "./components/Origin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const honeyTypes1 = [
    {
      id: 1,
      name: "Clover Honey",
      about:
        "Saturated with the aromatic, mild flavor of clover blossoms, clover honey is the best-known honey variety with the largest annual production. Grown in Canada, the United States, Sweden, and New Zealand, this popular honey has a sweet, mild taste with a hint of cinnamon and a light golden color. Although clover honey doesn't contain as many antioxidants as darker varieties (such as buckwheat and manuka), it's the perfect all-purpose honey to keep on hand in your establishment for all your tableside needs.",
    },
    {
      id: 2,
      name: "Wildflower Honey",
      about:
        "Wildflower honey features a select blend of wild blossoms and flowers. Because wildflower honey is collected from any variety of wildflowers depending on the season and region that they're in bloom, it may originate from any country that grows honey. Its taste varies depending on the flowers it is created from. However, it's typically slightly darker than other honey varieties, adding a robust flavor to baking recipes.",
    },
    {
      id: 3,
      name: "Acacia Honey",
      about:
        'Acacia honey is created with the nectar from black locust trees, also known as false acacia tress. For this reason, it is sometimes sold as "locust honey" in the United States. The honey features a sweet, delicate flavor with a hint of vanilla and a light, almost transparent color. Likely due to its higher fructose content, acacia honey takes longer to crystallize. As a result, acacia honey is a great choice for smaller establishments that may take a long time to finish a jar of honey.',
    },
    {
      id: 4,
      name: "Alfalfa Honey",
      about:
        "Largely produced in the United States and Canada, the alfalfa honey variety is created with nectar from bright purple alfalfa blossoms. The final product is a light, herbal flavored honey with delicate, mildly sweet undertones. Alfalfa's smooth texture and mild taste are akin to clover honey. Because Alfalfa is slightly less sweet, however, it is more ideally used for cooking applications. Add it to pastries and breads as a healthy alternative to sugar.",
    },
    {
      id: 5,
      name: "Buckwheat Honey",
      about:
        "Dark and bold, buckwheat honey is collected fresh from the small white blossoms of the buckwheat grain. It's grown in the United States, France, Canada, Japan, and the Netherlands. Typically compared to blackstrap molasses, this honey variety is characterized by an earthy aroma and a rich amber color. It has a stronger and heartier taste than lighter honey varieties, and it's also higher in antioxidants. Because of its bold flavors, buckwheat honey is best used for baking and cooking. Products baked with this golden honey will dry out less quickly and be less likely to crack than those baked with traditional sugar.",
    },
  ];
  const honeyTypes2 = [
    {
      id: 6,
      name: "Creamed Honey",
      about:
        "While it's not technically a type of honey, creamed honey denotes a special way of preparing honey. Also known as spun honey, it is made by storing honey at a temperature of around 55 degrees Fahrenheit and letting it crystallize. Creamed honey has a richer, creamier texture than traditional honey. It also typically has a much lighter color than liquid honey from the same flower. The crystals in creamed honey create a smooth and easily spreadable product. It's a great addition to breakfast spread offerings and adds interest to any menu.",
    },
    {
      id: 7,
      name: "Manuka Honey",
      about:
        "Manuka honey is produced in Australia and New Zealand by bees that pollinate the native Manuka bush. This honey offers a mildly sweet taste with a subtle nutty flavor. A slight bitter aftertaste offsets the initial sweetness. While most honey has natural antibacterial qualities, manuka honey has greater amounts of antibacterial ingredients than most other types of honey. This Australian honey protects against damage from bacteria, boosts the production of special cells that repair damaged tissue, and eases pain and inflammation.",
    },
    {
      id: 8,
      name: "Eucalyptus Honey",
      about:
        "Gathered from the flowering eucalyptus trees of Australia, this distinctive honey has a sweet flavor offset by cool undertones of fresh eucalyptus. Eucalyptus honey has a slightly medicinal scent. Because of its menthol-like properties, this honey is great for soothing coughs, colds, and upper-respiratory infections. Eucalyptus honey features a mild flavor, making it easily palatable.",
    },
    {
      id: 9,
      name: "Orange Blossom Honey",
      about:
        "Fresh from the spring blossoms of Florida's orange groves, orange blossom honey features light citrus undertones. It has a golden color and a wholesome, sweet taste and aroma. The citrusy elements of orange blossom honey add an exciting element to baking endeavors. Try blending it with softened butter, orange rind, and lemon rind to create orange blossom honey butter, which is sure to become a popular menu item.",
    },
    {
      id: 10,
      name: "Baker's Special Honey ",
      about:
        "Baker's special honey is a blend of classic honey varieties. Featuring a deep amber color and rich flavor, this honey has a more robust taste than lighter, tableside honey. Like its name implies, baker's special honey is the perfect alternative to standard sugar in baking recipes. This honey variety is also used for brewing batches of mead, a trendy fermented beverage made from yeast and honey.",
    },
  ];
  const [page, setPage] = useState(1);
  function changePage(page) {
    setPage(page);
  }
  const honeyCanada = [
    {
      origin: "Canada",
      id: 1,
      name: "Clover Honey",
      about:
        "Saturated with the aromatic, mild flavor of clover blossoms, clover honey is the best-known honey variety with the largest annual production. Grown in Canada, the United States, Sweden, and New Zealand, this popular honey has a sweet, mild taste with a hint of cinnamon and a light golden color. Although clover honey doesn't contain as many antioxidants as darker varieties (such as buckwheat and manuka), it's the perfect all-purpose honey to keep on hand in your establishment for all your tableside needs.",
    },
    {
      origin: "Canada",
      id: 2,
      name: "Wildflower Honey",
      about:
        "Wildflower honey features a select blend of wild blossoms and flowers. Because wildflower honey is collected from any variety of wildflowers depending on the season and region that they're in bloom, it may originate from any country that grows honey. Its taste varies depending on the flowers it is created from. However, it's typically slightly darker than other honey varieties, adding a robust flavor to baking recipes.",
    },
  ];
  const honeyUS = [
    {
      origin: "US",
      id: 3,
      name: "Acacia Honey",
      about:
        'Acacia honey is created with the nectar from black locust trees, also known as false acacia tress. For this reason, it is sometimes sold as "locust honey" in the United States. The honey features a sweet, delicate flavor with a hint of vanilla and a light, almost transparent color. Likely due to its higher fructose content, acacia honey takes longer to crystallize. As a result, acacia honey is a great choice for smaller establishments that may take a long time to finish a jar of honey.',
    },
    {
      origin: "US",
      id: 4,
      name: "Alfalfa Honey",
      about:
        "Largely produced in the United States and Canada, the alfalfa honey variety is created with nectar from bright purple alfalfa blossoms. The final product is a light, herbal flavored honey with delicate, mildly sweet undertones. Alfalfa's smooth texture and mild taste are akin to clover honey. Because Alfalfa is slightly less sweet, however, it is more ideally used for cooking applications. Add it to pastries and breads as a healthy alternative to sugar.",
    },
    {
      origin: "US",
      id: 9,
      name: "Orange Blossom Honey",
      about:
        "Fresh from the spring blossoms of Florida's orange groves, orange blossom honey features light citrus undertones. It has a golden color and a wholesome, sweet taste and aroma. The citrusy elements of orange blossom honey add an exciting element to baking endeavors. Try blending it with softened butter, orange rind, and lemon rind to create orange blossom honey butter, which is sure to become a popular menu item.",
    },
    {
      origin: "US",
      id: 10,
      name: "Baker's Special Honey ",
      about:
        "Baker's special honey is a blend of classic honey varieties. Featuring a deep amber color and rich flavor, this honey has a more robust taste than lighter, tableside honey. Like its name implies, baker's special honey is the perfect alternative to standard sugar in baking recipes. This honey variety is also used for brewing batches of mead, a trendy fermented beverage made from yeast and honey.",
    },
  ];
  const honeyFrance = [
    {
      origin: "France",
      id: 5,
      name: "Buckwheat Honey",
      about:
        "Dark and bold, buckwheat honey is collected fresh from the small white blossoms of the buckwheat grain. It's grown in the United States, France, Canada, Japan, and the Netherlands. Typically compared to blackstrap molasses, this honey variety is characterized by an earthy aroma and a rich amber color. It has a stronger and heartier taste than lighter honey varieties, and it's also higher in antioxidants. Because of its bold flavors, buckwheat honey is best used for baking and cooking. Products baked with this golden honey will dry out less quickly and be less likely to crack than those baked with traditional sugar.",
    },
    {
      origin: "France",
      id: 6,
      name: "Creamed Honey",
      about:
        "While it's not technically a type of honey, creamed honey denotes a special way of preparing honey. Also known as spun honey, it is made by storing honey at a temperature of around 55 degrees Fahrenheit and letting it crystallize. Creamed honey has a richer, creamier texture than traditional honey. It also typically has a much lighter color than liquid honey from the same flower. The crystals in creamed honey create a smooth and easily spreadable product. It's a great addition to breakfast spread offerings and adds interest to any menu.",
    },
  ];
  const honeyAustralia = [
    {
      origin: "Australia",
      id: 7,
      name: "Manuka Honey",
      about:
        "Manuka honey is produced in Australia and New Zealand by bees that pollinate the native Manuka bush. This honey offers a mildly sweet taste with a subtle nutty flavor. A slight bitter aftertaste offsets the initial sweetness. While most honey has natural antibacterial qualities, manuka honey has greater amounts of antibacterial ingredients than most other types of honey. This Australian honey protects against damage from bacteria, boosts the production of special cells that repair damaged tissue, and eases pain and inflammation.",
    },
    {
      origin: "Australia",
      id: 8,
      name: "Eucalyptus Honey",
      about:
        "Gathered from the flowering eucalyptus trees of Australia, this distinctive honey has a sweet flavor offset by cool undertones of fresh eucalyptus. Eucalyptus honey has a slightly medicinal scent. Because of its menthol-like properties, this honey is great for soothing coughs, colds, and upper-respiratory infections. Eucalyptus honey features a mild flavor, making it easily palatable.",
    },
  ];
  const [origin, setOrigin] = useState("");
  function changePage(origin) {
    setPage(origin);
  }
  function changeOrigin(origin) {
    setOrigin(origin);
  }
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/types"
          element={
            <HoneyTypes
              honeyTypes1={honeyTypes1}
              honeyTypes2={honeyTypes2}
              changePage={changePage}
              page={page}
            />
          }
        />
        <Route
          path="/origin"
          element={
            <Origin
              honeyCanada={honeyCanada}
              honeyUS={honeyUS}
              honeyFrance={honeyFrance}
              honeyAustralia={honeyAustralia}
              changeOrigin={changeOrigin}
              origin={origin}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
