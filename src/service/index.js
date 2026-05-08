export const baseUrl = "https://ecommercev01.pythonanywhere.com";

// ─── Product ───────────────────────────────────────────────────────────────

export const getcategory = () => {
  return fetch(`${baseUrl}/product/categories/`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const getproductlist = () => {
  return fetch(`${baseUrl}/product/list/`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const getproductdetail = (id) => {
  return fetch(`${baseUrl}/product/detail/?product_id=${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// ─── User ──────────────────────────────────────────────────────────────────

export const registerfunc = (email, password, name) => {
  return fetch(`${baseUrl}/user/register/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      first_name: name,
      email_or_phone: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const loginfunction = (password, email) => {
  return fetch(`${baseUrl}/user/token/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email_or_phone: email,
      password: password,
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const getuserinfo = (token) => {
  return fetch(`${baseUrl}/user/detail/`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

export const updateprofile = (token, data) => {
  return fetch(`${baseUrl}/user/update-profile/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// ─── Cart ──────────────────────────────────────────────────────────────────

export const addtocart = (token, productId, quantity = 1) => {
  return fetch(`${baseUrl}/order/add-to-cart/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // swagger: product_id, quantity, properties (required)
    body: JSON.stringify({ product_id: productId, quantity, properties: {} }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("add-to-cart response:", data);
      return data;
    })
    .catch((err) => console.error(err));
};

export const getcartitems = (token) => {
  return fetch(`${baseUrl}/order/cart-items/`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("cart-items response:", data);
      return data;
    })
    .catch((err) => console.error(err));
};

export const removefromcart = (token, cartItemId) => {
  return fetch(`${baseUrl}/order/remove-from-cart`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ cart_item_id: cartItemId }),
  })
    .then((res) => {
      console.log("remove-from-cart status:", res.status);
      if (res.status === 204 || res.status === 200) return { success: true };
      return res.json();
    })
    .then((data) => {
      console.log("remove-from-cart response:", data);
      return data;
    })
    .catch((err) => console.error(err));
};

export const createorder = (token) => {
  return fetch(`${baseUrl}/order/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

// ─── Wishlist ──────────────────────────────────────────────────────────────

export const addtowishlist = (token, productId) => {
  // API query parameter kutadi: ?product_id=X
  return fetch(`${baseUrl}/action/add-to-wishlist/?product_id=${productId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("add-to-wishlist response:", data);
      return data;
    })
    .catch((err) => console.error(err));
};

export const getwishlist = (token) => {
  return fetch(`${baseUrl}/action/my-wishlist/`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("my-wishlist response:", data);
      return data;
    })
    .catch((err) => console.error(err));
};

export const removefromwishlist = (token, productId) => {
  // API query parameter kutadi: ?product_id=X
  return fetch(`${baseUrl}/action/remove-from-wishlist/?product_id=${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log("remove-from-wishlist status:", res.status);
      if (res.status === 204 || res.status === 200) return { success: true };
      return res.json();
    })
    .then((data) => {
      console.log("remove-from-wishlist response:", data);
      return data;
    })
    .catch((err) => console.error(err));
};
