"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainCoop = exports.MainCoop_Status = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum MainCoop.Status
 */
var MainCoop_Status;
(function (MainCoop_Status) {
    /**
     * @generated from protobuf enum value: STATUS_INVALID = 0;
     */
    MainCoop_Status[MainCoop_Status["INVALID"] = 0] = "INVALID";
    /**
     * @generated from protobuf enum value: STATUS_RUNNING = 1;
     */
    MainCoop_Status[MainCoop_Status["RUNNING"] = 1] = "RUNNING";
    /**
     * @generated from protobuf enum value: STATUS_FINISHED = 2;
     */
    MainCoop_Status[MainCoop_Status["FINISHED"] = 2] = "FINISHED";
})(MainCoop_Status = exports.MainCoop_Status || (exports.MainCoop_Status = {}));
// @generated message type with reflection information, may provide speed optimized methods
class MainCoop$Type extends runtime_5.MessageType {
    constructor() {
        super("MainCoop", [
            { no: 6, name: "status", kind: "enum", T: () => ["MainCoop.Status", MainCoop_Status, "STATUS_"] },
            { no: 5, name: "normal_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 7, name: "temp_var_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 5 /*ScalarType.INT32*/ } },
            { no: 9, name: "self_confidence", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 1, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "save_point_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "seen_ending_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { status: 0, normalVarMap: {}, tempVarMap: {}, selfConfidence: 0, id: 0, savePointIdList: [], seenEndingMap: {} };
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
                case /* MainCoop.Status status */ 6:
                    message.status = reader.int32();
                    break;
                case /* map<uint32, int32> normal_var_map */ 5:
                    this.binaryReadMap5(message.normalVarMap, reader, options);
                    break;
                case /* map<uint32, int32> temp_var_map */ 7:
                    this.binaryReadMap7(message.tempVarMap, reader, options);
                    break;
                case /* uint32 self_confidence */ 9:
                    message.selfConfidence = reader.uint32();
                    break;
                case /* uint32 id */ 1:
                    message.id = reader.uint32();
                    break;
                case /* repeated uint32 save_point_id_list */ 10:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.savePointIdList.push(reader.uint32());
                    else
                        message.savePointIdList.push(reader.uint32());
                    break;
                case /* map<uint32, uint32> seen_ending_map */ 13:
                    this.binaryReadMap13(message.seenEndingMap, reader, options);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap5(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field MainCoop.normal_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap7(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field MainCoop.temp_var_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    binaryReadMap13(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field MainCoop.seen_ending_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* MainCoop.Status status = 6; */
        if (message.status !== 0)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.status);
        /* map<uint32, int32> normal_var_map = 5; */
        for (let k of Object.keys(message.normalVarMap))
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).int32(message.normalVarMap[k]).join();
        /* map<uint32, int32> temp_var_map = 7; */
        for (let k of Object.keys(message.tempVarMap))
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).int32(message.tempVarMap[k]).join();
        /* uint32 self_confidence = 9; */
        if (message.selfConfidence !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.selfConfidence);
        /* uint32 id = 1; */
        if (message.id !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.id);
        /* repeated uint32 save_point_id_list = 10; */
        if (message.savePointIdList.length) {
            writer.tag(10, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.savePointIdList.length; i++)
                writer.uint32(message.savePointIdList[i]);
            writer.join();
        }
        /* map<uint32, uint32> seen_ending_map = 13; */
        for (let k of Object.keys(message.seenEndingMap))
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.seenEndingMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MainCoop
 */
exports.MainCoop = new MainCoop$Type();
