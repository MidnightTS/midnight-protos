"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GachaActivityPercentNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GachaActivityPercentNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("GachaActivityPercentNotify", [
            { no: 13, name: "Unk3300_GHHIGKFDONE", kind: "scalar", jsonName: "Unk3300GHHIGKFDONE", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "Unk3300_EOPJBPHFDEE", kind: "scalar", jsonName: "Unk3300EOPJBPHFDEE", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_IOLPAJKDEEA", kind: "scalar", jsonName: "Unk3300IOLPAJKDEEA", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "target_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { unk3300GHHIGKFDONE: 0, unk3300EOPJBPHFDEE: 0, unk3300IOLPAJKDEEA: 0, targetNumMap: {} };
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
                case /* uint32 Unk3300_GHHIGKFDONE = 13 [json_name = "Unk3300GHHIGKFDONE"];*/ 13:
                    message.unk3300GHHIGKFDONE = reader.uint32();
                    break;
                case /* uint32 Unk3300_EOPJBPHFDEE = 6 [json_name = "Unk3300EOPJBPHFDEE"];*/ 6:
                    message.unk3300EOPJBPHFDEE = reader.uint32();
                    break;
                case /* uint32 Unk3300_IOLPAJKDEEA = 5 [json_name = "Unk3300IOLPAJKDEEA"];*/ 5:
                    message.unk3300IOLPAJKDEEA = reader.uint32();
                    break;
                case /* map<uint32, uint32> target_num_map */ 12:
                    this.binaryReadMap12(message.targetNumMap, reader, options);
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
    binaryReadMap12(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GachaActivityPercentNotify.target_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 Unk3300_GHHIGKFDONE = 13 [json_name = "Unk3300GHHIGKFDONE"]; */
        if (message.unk3300GHHIGKFDONE !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.unk3300GHHIGKFDONE);
        /* uint32 Unk3300_EOPJBPHFDEE = 6 [json_name = "Unk3300EOPJBPHFDEE"]; */
        if (message.unk3300EOPJBPHFDEE !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.unk3300EOPJBPHFDEE);
        /* uint32 Unk3300_IOLPAJKDEEA = 5 [json_name = "Unk3300IOLPAJKDEEA"]; */
        if (message.unk3300IOLPAJKDEEA !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.unk3300IOLPAJKDEEA);
        /* map<uint32, uint32> target_num_map = 12; */
        for (let k of Object.keys(message.targetNumMap))
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.targetNumMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GachaActivityPercentNotify
 */
exports.GachaActivityPercentNotify = new GachaActivityPercentNotify$Type();
