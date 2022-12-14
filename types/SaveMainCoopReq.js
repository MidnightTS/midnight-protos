"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveMainCoopReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SaveMainCoopReq$Type extends runtime_5.MessageType {
    constructor() {
        super("SaveMainCoopReq", [
            { no: 14, name: "normal_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 6, name: "self_confidence", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "save_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "temp_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } }
        ]);
    }
    create(value) {
        const message = { normalVarMap: {}, selfConfidence: 0, id: 0, savePointId: 0, tempVarMap: {} };
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
                case /* map<uint32, int32> normal_var_map */ 14:
                    this.binaryReadMap14(message.normalVarMap, reader, options);
                    break;
                case /* uint32 self_confidence */ 6:
                    message.selfConfidence = reader.uint32();
                    break;
                case /* uint32 id */ 13:
                    message.id = reader.uint32();
                    break;
                case /* uint32 save_point_id */ 2:
                    message.savePointId = reader.uint32();
                    break;
                case /* map<uint32, int32> temp_var_map */ 12:
                    this.binaryReadMap12(message.tempVarMap, reader, options);
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
    binaryReadMap14(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SaveMainCoopReq.normal_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
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
                    val = reader.int32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field SaveMainCoopReq.temp_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, int32> normal_var_map = 14; */
        for (let k of Object.keys(message.normalVarMap))
            writer.tag(14, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int32(message.normalVarMap[k]).join();
        /* uint32 self_confidence = 6; */
        if (message.selfConfidence !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.selfConfidence);
        /* uint32 id = 13; */
        if (message.id !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.id);
        /* uint32 save_point_id = 2; */
        if (message.savePointId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.savePointId);
        /* map<uint32, int32> temp_var_map = 12; */
        for (let k of Object.keys(message.tempVarMap))
            writer.tag(12, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).int32(message.tempVarMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message SaveMainCoopReq
 */
exports.SaveMainCoopReq = new SaveMainCoopReq$Type();
