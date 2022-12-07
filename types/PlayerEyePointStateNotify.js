"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerEyePointStateNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PolygonRegionSize_1 = require("./PolygonRegionSize");
const CylinderRegionSize_1 = require("./CylinderRegionSize");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerEyePointStateNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerEyePointStateNotify", [
            { no: 12, name: "eye_point_pos", kind: "message", T: () => Vector_1.Vector },
            { no: 9, name: "Unk3300_KFOHOBLMMLB", kind: "scalar", jsonName: "Unk3300KFOHOBLMMLB", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "Unk3300_GNFJIOEGHOE", kind: "scalar", jsonName: "Unk3300GNFJIOEGHOE", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "Unk3300_BIHEKNFDDDI", kind: "scalar", jsonName: "Unk3300BIHEKNFDDDI", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "fix_lod_level", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "Unk3300_NIPFCFCBFAE", kind: "scalar", jsonName: "Unk3300NIPFCFCBFAE", T: 8 /*ScalarType.BOOL*/ },
            { no: 13, name: "Unk3300_JGEMKKJAHKA", kind: "scalar", jsonName: "Unk3300JGEMKKJAHKA", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_EOPFNBBBGPK", kind: "scalar", jsonName: "Unk3300EOPFNBBBGPK", T: 13 /*ScalarType.UINT32*/ },
            { no: 1413, name: "sphere_radius", kind: "scalar", oneof: "regionSize", T: 2 /*ScalarType.FLOAT*/ },
            { no: 1362, name: "cubic_size", kind: "message", oneof: "regionSize", T: () => Vector_1.Vector },
            { no: 1250, name: "cylinder_size", kind: "message", oneof: "regionSize", T: () => CylinderRegionSize_1.CylinderRegionSize },
            { no: 608, name: "polygon_size", kind: "message", oneof: "regionSize", T: () => PolygonRegionSize_1.PolygonRegionSize }
        ]);
    }
    create(value) {
        const message = { unk3300KFOHOBLMMLB: false, unk3300GNFJIOEGHOE: 0, unk3300BIHEKNFDDDI: 0, fixLodLevel: 0, unk3300NIPFCFCBFAE: false, unk3300JGEMKKJAHKA: 0, unk3300EOPFNBBBGPK: 0, regionSize: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* Vector eye_point_pos */ 12:
                    message.eyePointPos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.eyePointPos);
                    break;
                case /* bool Unk3300_KFOHOBLMMLB = 9 [json_name = "Unk3300KFOHOBLMMLB"];*/ 9:
                    message.unk3300KFOHOBLMMLB = reader.bool();
                    break;
                case /* uint32 Unk3300_GNFJIOEGHOE = 1 [json_name = "Unk3300GNFJIOEGHOE"];*/ 1:
                    message.unk3300GNFJIOEGHOE = reader.uint32();
                    break;
                case /* uint32 Unk3300_BIHEKNFDDDI = 8 [json_name = "Unk3300BIHEKNFDDDI"];*/ 8:
                    message.unk3300BIHEKNFDDDI = reader.uint32();
                    break;
                case /* int32 fix_lod_level */ 11:
                    message.fixLodLevel = reader.int32();
                    break;
                case /* bool Unk3300_NIPFCFCBFAE = 14 [json_name = "Unk3300NIPFCFCBFAE"];*/ 14:
                    message.unk3300NIPFCFCBFAE = reader.bool();
                    break;
                case /* uint32 Unk3300_JGEMKKJAHKA = 13 [json_name = "Unk3300JGEMKKJAHKA"];*/ 13:
                    message.unk3300JGEMKKJAHKA = reader.uint32();
                    break;
                case /* uint32 Unk3300_EOPFNBBBGPK = 6 [json_name = "Unk3300EOPFNBBBGPK"];*/ 6:
                    message.unk3300EOPFNBBBGPK = reader.uint32();
                    break;
                case /* float sphere_radius */ 1413:
                    message.regionSize = {
                        oneofKind: "sphereRadius",
                        sphereRadius: reader.float()
                    };
                    break;
                case /* Vector cubic_size */ 1362:
                    message.regionSize = {
                        oneofKind: "cubicSize",
                        cubicSize: Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.regionSize.cubicSize)
                    };
                    break;
                case /* CylinderRegionSize cylinder_size */ 1250:
                    message.regionSize = {
                        oneofKind: "cylinderSize",
                        cylinderSize: CylinderRegionSize_1.CylinderRegionSize.internalBinaryRead(reader, reader.uint32(), options, message.regionSize.cylinderSize)
                    };
                    break;
                case /* PolygonRegionSize polygon_size */ 608:
                    message.regionSize = {
                        oneofKind: "polygonSize",
                        polygonSize: PolygonRegionSize_1.PolygonRegionSize.internalBinaryRead(reader, reader.uint32(), options, message.regionSize.polygonSize)
                    };
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* Vector eye_point_pos = 12; */
        if (message.eyePointPos)
            Vector_1.Vector.internalBinaryWrite(message.eyePointPos, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_KFOHOBLMMLB = 9 [json_name = "Unk3300KFOHOBLMMLB"]; */
        if (message.unk3300KFOHOBLMMLB !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.unk3300KFOHOBLMMLB);
        /* uint32 Unk3300_GNFJIOEGHOE = 1 [json_name = "Unk3300GNFJIOEGHOE"]; */
        if (message.unk3300GNFJIOEGHOE !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.unk3300GNFJIOEGHOE);
        /* uint32 Unk3300_BIHEKNFDDDI = 8 [json_name = "Unk3300BIHEKNFDDDI"]; */
        if (message.unk3300BIHEKNFDDDI !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.unk3300BIHEKNFDDDI);
        /* int32 fix_lod_level = 11; */
        if (message.fixLodLevel !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.fixLodLevel);
        /* bool Unk3300_NIPFCFCBFAE = 14 [json_name = "Unk3300NIPFCFCBFAE"]; */
        if (message.unk3300NIPFCFCBFAE !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.unk3300NIPFCFCBFAE);
        /* uint32 Unk3300_JGEMKKJAHKA = 13 [json_name = "Unk3300JGEMKKJAHKA"]; */
        if (message.unk3300JGEMKKJAHKA !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300JGEMKKJAHKA);
        /* uint32 Unk3300_EOPFNBBBGPK = 6 [json_name = "Unk3300EOPFNBBBGPK"]; */
        if (message.unk3300EOPFNBBBGPK !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300EOPFNBBBGPK);
        /* float sphere_radius = 1413; */
        if (message.regionSize.oneofKind === "sphereRadius")
            writer.tag(1413, runtime_1.WireType.Bit32).float(message.regionSize.sphereRadius);
        /* Vector cubic_size = 1362; */
        if (message.regionSize.oneofKind === "cubicSize")
            Vector_1.Vector.internalBinaryWrite(message.regionSize.cubicSize, writer.tag(1362, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* CylinderRegionSize cylinder_size = 1250; */
        if (message.regionSize.oneofKind === "cylinderSize")
            CylinderRegionSize_1.CylinderRegionSize.internalBinaryWrite(message.regionSize.cylinderSize, writer.tag(1250, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* PolygonRegionSize polygon_size = 608; */
        if (message.regionSize.oneofKind === "polygonSize")
            PolygonRegionSize_1.PolygonRegionSize.internalBinaryWrite(message.regionSize.polygonSize, writer.tag(608, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerEyePointStateNotify
 */
exports.PlayerEyePointStateNotify = new PlayerEyePointStateNotify$Type();
