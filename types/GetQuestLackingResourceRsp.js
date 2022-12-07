"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetQuestLackingResourceRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetQuestLackingResourceRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetQuestLackingResourceRsp", [
            { no: 2, name: "lacked_place_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 7, name: "lacked_npc_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 11, name: "lacked_place_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "quest_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "lacked_npc_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { lackedPlaceMap: {}, lackedNpcMap: {}, lackedPlaceList: [], questId: 0, retcode: 0, lackedNpcList: [] };
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
                case /* map<uint32, uint32> lacked_place_map */ 2:
                    this.binaryReadMap2(message.lackedPlaceMap, reader, options);
                    break;
                case /* map<uint32, uint32> lacked_npc_map */ 7:
                    this.binaryReadMap7(message.lackedNpcMap, reader, options);
                    break;
                case /* repeated uint32 lacked_place_list */ 11:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lackedPlaceList.push(reader.uint32());
                    else
                        message.lackedPlaceList.push(reader.uint32());
                    break;
                case /* uint32 quest_id */ 3:
                    message.questId = reader.uint32();
                    break;
                case /* int32 retcode */ 6:
                    message.retcode = reader.int32();
                    break;
                case /* repeated uint32 lacked_npc_list */ 14:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.lackedNpcList.push(reader.uint32());
                    else
                        message.lackedNpcList.push(reader.uint32());
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
    binaryReadMap2(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field GetQuestLackingResourceRsp.lacked_place_map");
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
                    val = reader.uint32();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field GetQuestLackingResourceRsp.lacked_npc_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> lacked_place_map = 2; */
        for (let k of Object.keys(message.lackedPlaceMap))
            writer.tag(2, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.lackedPlaceMap[k]).join();
        /* map<uint32, uint32> lacked_npc_map = 7; */
        for (let k of Object.keys(message.lackedNpcMap))
            writer.tag(7, runtime_2.WireType.LengthDelimited).fork().tag(1, runtime_2.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_2.WireType.Varint).uint32(message.lackedNpcMap[k]).join();
        /* repeated uint32 lacked_place_list = 11; */
        if (message.lackedPlaceList.length) {
            writer.tag(11, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lackedPlaceList.length; i++)
                writer.uint32(message.lackedPlaceList[i]);
            writer.join();
        }
        /* uint32 quest_id = 3; */
        if (message.questId !== 0)
            writer.tag(3, runtime_2.WireType.Varint).uint32(message.questId);
        /* int32 retcode = 6; */
        if (message.retcode !== 0)
            writer.tag(6, runtime_2.WireType.Varint).int32(message.retcode);
        /* repeated uint32 lacked_npc_list = 14; */
        if (message.lackedNpcList.length) {
            writer.tag(14, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.lackedNpcList.length; i++)
                writer.uint32(message.lackedNpcList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetQuestLackingResourceRsp
 */
exports.GetQuestLackingResourceRsp = new GetQuestLackingResourceRsp$Type();
