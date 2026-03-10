import Map "mo:core/Map";
import Text "mo:core/Text";
import Array "mo:core/Array";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    message : Text;
  };

  let inquiries = Map.empty<Text, Inquiry>();

  public shared ({ caller }) func submitInquiry(id : Text, name : Text, phone : Text, message : Text) : async () {
    let inquiry : Inquiry = { name; phone; message };
    inquiries.add(id, inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray();
  };
};
