import Map "mo:core/Map";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Array "mo:core/Array";
import Int "mo:core/Int";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";

actor {
  type ProductInterest = {
    hennaPowder : Bool;
    multaniMitti : Bool;
  };

  type Inquiry = {
    name : Text;
    company : Text;
    country : Text;
    products : ProductInterest;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(a : Inquiry, b : Inquiry) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let inquiries = Map.empty<Time.Time, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, company : Text, country : Text, hennaPowder : Bool, multaniMitti : Bool, message : Text) : async () {
    let productInterest : ProductInterest = {
      hennaPowder;
      multaniMitti;
    };

    let inquiry : Inquiry = {
      name;
      company;
      country;
      products = productInterest;
      message;
      timestamp = Time.now();
    };

    inquiries.add(inquiry.timestamp, inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };

  public query ({ caller }) func getInquiryByTimestamp(timestamp : Time.Time) : async Inquiry {
    switch (inquiries.get(timestamp)) {
      case (null) { Runtime.trap("Inquiry not found") };
      case (?inquiry) { inquiry };
    };
  };

  public query ({ caller }) func getInquiriesByCountry(country : Text) : async [Inquiry] {
    let filtered = inquiries.values().filter(
      func(inquiry) {
        Text.equal(inquiry.country, country);
      }
    );
    filtered.toArray();
  };

  public query ({ caller }) func countProductInterest() : async (Nat, Nat) {
    var hennaPowderCount = 0;
    var multaniMittiCount = 0;

    for (inquiry in inquiries.values()) {
      if (inquiry.products.hennaPowder) {
        hennaPowderCount += 1;
      };
      if (inquiry.products.multaniMitti) {
        multaniMittiCount += 1;
      };
    };

    (hennaPowderCount, multaniMittiCount);
  };
};
