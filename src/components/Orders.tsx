import { useQuery } from "@tanstack/react-query"
import { getUserOrders } from "../api/OrdersApi";
import type { Order } from "../interfaces/Order";

import { useState } from "react";
import { FilterOrder } from "../utils/FilterOrders";
import { useNavigate } from "react-router-dom";


const Orders = () => { 
    const query =  useQuery( { queryKey : ['orders'] , queryFn : getUserOrders })  ; 
    const [filter ,setFilter] = useState('ALL')  ;    
    const navigate = useNavigate() ;  
    const orders : Order[] | undefined =  query.status === "success" ?  query.data.data  : []  ; 
    const { paidOrders  , unpaidOrders , deliveredOrders , shippedOrders  } =  orders ? FilterOrder(orders) : {}  ; 
    return (
      <>
      <div className="p-6 bg-gray-900 text-white min-h-screen">
          <div className="font-bold text-3xl mb-6 text-blue-400">My Orders</div>
          <div className="flex mb-4 gap-4 sm:gap-6 text-sm sm:text-lg lg:text-xl xl:text-2xl font-semibold border-b border-gray-700 pb-2 overflow-x-auto whitespace-nowrap">
              <div onClick={() => setFilter('ALL')} className={`cursor-pointer transition-colors duration-200 ${filter === 'ALL' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'}`}>All</div>
              <div onClick={() => setFilter('PAID')} className={`cursor-pointer transition-colors duration-200 ${filter === 'PAID' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'}`}>Paid</div>
              <div onClick={() => setFilter('UNPAID')} className={`cursor-pointer transition-colors duration-200 ${filter === 'UNPAID' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'}`}>Unpaid</div>
              <div onClick={() => setFilter('SHIPPED')} className={`cursor-pointer transition-colors duration-200 ${filter === 'SHIPPED' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'}`}>Shipped</div>
              <div onClick={() => setFilter('DELIVERED')} className={`cursor-pointer transition-colors duration-200 ${filter === 'DELIVERED' ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'}`}>Delivered</div>
          </div>
  
          <div className="p-4 bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-x-auto">
              <table className="min-w-full text-xs sm:text-base lg:text-lg xl:text-xl text-gray-300">
                  <thead>
                      <tr className="border-b border-gray-700 text-white">
                          <th className="px-4 py-2 text-left">Id</th>
                          <th className="px-4 py-2 text-left">Price</th>
                          <th className="px-4 py-2 text-left">Status</th>
                          <th className="px-4 py-2 text-left">Created At</th>
                      </tr>
                  </thead>
                { query.status === "success" ?  
                  <tbody>
                      {filter === 'ALL' ? (
                          orders!.map((element) => (
                              <tr key={element.id} className="hover:bg-gray-700 transition-colors">
                                  <td className="px-4 py-2 hover:underline cursor-pointer text-blue-400" onClick={() => navigate(`/app/order?orderId=${element.id}`)}>{element.id}</td>
                                  <td className="px-4 py-2">{element.totalCost}</td>
                                  <td className="px-4 py-2">{element.orderStatus}</td>
                                  <td className="px-4 py-2">{element.createdAt ? new Date(element.createdAt).toUTCString() : ''}</td>
                              </tr>
                          ))
                      ) : filter === 'PAID' ? (
                          paidOrders!.map((element) => (
                              <tr key={element.id} className="hover:bg-gray-700 transition-colors">
                                  <td className="px-4 py-2 hover:underline cursor-pointer text-blue-400" onClick={() => navigate(`/app/order?orderId=${element.id}`)}>{element.id}</td>
                                  <td className="px-4 py-2">{element.totalCost}</td>
                                  <td className="px-4 py-2">{element.orderStatus}</td>
                                  <td className="px-4 py-2">{element.createdAt ? new Date(element.createdAt).toUTCString() : ''}</td>
                              </tr>
                          ))
                      ) : filter === 'UNPAID' ? (
                          unpaidOrders!.map((element) => (
                              <tr key={element.id} className="hover:bg-gray-700 transition-colors">
                                  <td className="px-4 py-2 hover:underline cursor-pointer text-blue-400" onClick={() => navigate(`/app/order?orderId=${element.id}`)}>{element.id}</td>
                                  <td className="px-4 py-2">{element.totalCost}</td>
                                  <td className="px-4 py-2">{element.orderStatus}</td>
                                  <td className="px-4 py-2">{element.createdAt ? new Date(element.createdAt).toUTCString() : ''}</td>
                              </tr>
                          ))
                      ) : filter === 'SHIPPED' ? (
                          shippedOrders!.map((element) => (
                              <tr key={element.id} className="hover:bg-gray-700 transition-colors">
                                  <td className="px-4 py-2 hover:underline cursor-pointer text-blue-400" onClick={() => navigate(`/app/order?orderId=${element.id}`)}>{element.id}</td>
                                  <td className="px-4 py-2">{element.totalCost}</td>
                                  <td className="px-4 py-2">{element.orderStatus}</td>
                                  <td className="px-4 py-2">{element.createdAt ? new Date(element.createdAt).toUTCString() : ''}</td>
                              </tr>
                          ))
                      ) : (
                          deliveredOrders!.map((element) => (
                              <tr key={element.id} className="hover:bg-gray-700 transition-colors">
                                  <td className="px-4 py-2 hover:underline cursor-pointer text-blue-400" onClick={() => navigate(`/app/order?orderId=${element.id}`)}>{element.id}</td>
                                  <td className="px-4 py-2">{element.totalCost}</td>
                                  <td className="px-4 py-2">{element.orderStatus}</td>
                                  <td className="px-4 py-2">{element.createdAt ? new Date(element.createdAt).toUTCString() : ''}</td>
                              </tr>
                          ))
                      )}
                  </tbody> : 
                  query.status === "pending" ? 
                  <>
                  <tr className="">
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  </tr>
                  <tr className="">
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  </tr>
                  <tr className="">
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  </tr>
                  <tr className="">
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  <td className="p-1"> <div className="h-[48px] skeleton"> </div></td>
                  </tr> 
                  </>
                  : 
                  <tr> 
                     Error loading orders
                  </tr>
                }
              </table>
          </div>
      </div>
  </>
     )
}

export default Orders