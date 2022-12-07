"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GivingRecord = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GivingRecord$Type extends runtime_5.MessageType {
    constructor() {
        super("GivingRecord", [
            { no: 3, name: "is_gadget_giving", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "is_finished", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 1, name: "material_count_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 4, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "last_group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "giving_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { isGadgetGiving: false, groupId: 0, isFinished: false, materialCountMap: {}, configId: 0, lastGroupId: 0, givingId: 0 };
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
                case /* bool is_gadget_giving */ 3:
                    message.isGadgetGiving = reader.bool();
                    break;
                case /* uint32 group_id */ 7:
                    message.groupId = reader.uint32();
                    break;
                case /* bool is_finished */ 6:
                    message.isFinished = reader.bool();
                    break;
                case /* map<uint32, uint32> material_count_map */ 1:
                    this.binaryReadMap1(message.materialCountMap, reader, options);
                    break;
                case /* uint32 config_id */ 4:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 last_group_id */ 5:
                    message.lastGroupId = reader.uint32();
                    break;
                case /* uint32 giving_id */ 14:
                    message.givingId = reader.uint32();
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
    binaryReadMap1(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field GivingRecord.material_count_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool is_gadget_giving = 3; */
        if (message.isGadgetGiving !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isGadgetGiving);
        /* uint32 group_id = 7; */
        if (message.groupId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.groupId);
        /* bool is_finished = 6; */
        if (message.isFinished !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isFinished);
        /* map<uint32, uint32> material_count_map = 1; */
        for (let k of Object.keys(message.materialCountMap))
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.materialCountMap[k]).join();
        /* uint32 config_id = 4; */
        if (message.configId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.configId);
        /* uint32 last_group_id = 5; */
        if (message.lastGroupId !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.lastGroupId);
        /* uint32 giving_id = 14; */
        if (message.givingId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.givingId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GivingRecord
 */
exports.GivingRecord = new GivingRecord$Type();
