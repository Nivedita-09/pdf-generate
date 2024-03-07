// MyDocument.jsx

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import PropTypes from "prop-types";
import DancingScript from "./fonts/DancingScript-VariableFont_wght.ttf";
import Img1 from "./assets/img1.jpg";
import Img2 from "./assets/img2.jpg";
import Img3 from "./assets/img3.jpg";
import Img4 from "./assets/img4.jpg";
import Img5 from "./assets/img5.jpg";

Font.register({
  family: "Dancing Script",
  src: DancingScript,
});

const MyDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Image
          src={data.image}
          style={{ position: "relative", width: "100%", height: "100%" }}
        />
        <View style={{ position: "absolute", top: "15%", width: "100%" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              width: "90%",
              marginLeft: "70px",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                width: "40%",
              }}
            >
              <Text style={{ fontSize: "20px", color: "white" }}>
                {data.username}
              </Text>
              <Text
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                  fontFamily: "Dancing Script",
                }}
              >
                {data.slogan}
              </Text>
            </View>
            <View style={{ width: "50%" }}>
              <Text style={{ color: "white" }}>{data.description}</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View style={{ padding: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
          }}
        >
          <Text style={{ fontSize: "24px", fontWeight: "bold" }}>
            INDULGE IN AN
          </Text>
          <Text
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              fontFamily: "Dancing Script",
            }}
          >
            Exuberant Lifestyle
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
            height: "50%",
          }}
        >
          <View style={{ width: "45%", margin: "auto" }}>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Evergreen Surroundings for a Lifetime.
            </Text>
            <Text style={{ fontSize: "12px" }}>
              At Akashparv, you will never be endosed by a concrete cluster, the
              project is endowed by 7000 acres of evergreen NDA prmises in the
              neighborhood.
            </Text>
            <Image
              src={Img1}
              alt="Image 1"
              style={{ width: "100%", height: "35%", objectFit: "cover" }}
            />
          </View>
          <View style={{ width: "45%", margin: "auto" }}>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Evergreen Surroundings for a Lifetime.
            </Text>
            <Text style={{ fontSize: "12px" }}>
              At Akashparv, you will never be endosed by a concrete cluster, the
              project is endowed by 7000 acres of evergreen NDA prmises in the
              neighborhood.
            </Text>
            <Image
              src={Img2}
              alt="Image 1"
              style={{ width: "100%", height: "35%", objectFit: "cover" }}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
            height: "50%",
          }}
        >
          <View style={{ width: "45%", margin: "auto" }}>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Evergreen Surroundings for a Lifetime.
            </Text>
            <Text style={{ fontSize: "12px" }}>
              At Akashparv, you will never be endosed by a concrete cluster, the
              project is endowed by 7000 acres of evergreen NDA prmises in the
              neighborhood.
            </Text>
            <Image
              src={Img3}
              alt="Image 1"
              style={{ width: "100%", height: "35%", objectFit: "cover" }}
            />
          </View>
          <View style={{ width: "45%", margin: "auto" }}>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Evergreen Surroundings for a Lifetime.
            </Text>
            <Text style={{ fontSize: "12px" }}>
              At Akashparv, you will never be endosed by a concrete cluster, the
              project is endowed by 7000 acres of evergreen NDA prmises in the
              neighborhood.
            </Text>
            <Image
              src={Img4}
              alt="Image 1"
              style={{ width: "100%", height: "35%", objectFit: "cover" }}
            />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            width: "100%",
            height: "50%",
          }}
        >
          <View style={{ width: "45%", margin: "auto" }}>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Evergreen Surroundings for a Lifetime.
            </Text>
            <Text style={{ fontSize: "12px" }}>
              At Akashparv, you will never be endosed by a concrete cluster, the
              project is endowed by 7000 acres of evergreen NDA prmises in the
              neighborhood.
            </Text>
            <Image
              src={Img5}
              alt="Image 1"
              style={{ width: "100%", height: "35%", objectFit: "cover" }}
            />
          </View>
          <View style={{ width: "45%", margin: "auto" }}>
            <Text style={{ fontSize: "16px", fontWeight: "bold" }}>
              Evergreen Surroundings for a Lifetime.
            </Text>
            <Text style={{ fontSize: "12px" }}>
              At Akashparv, you will never be endosed by a concrete cluster, the
              project is endowed by 7000 acres of evergreen NDA prmises in the
              neighborhood.
            </Text>
            <Image
              src={Img1}
              alt="Image 1"
              style={{ width: "100%", height: "35%", objectFit: "cover" }}
            />
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

MyDocument.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    slogan: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.object,
  }).isRequired,
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default MyDocument;
