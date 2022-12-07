"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerGiveFriendFlowerReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerGiveFriendFlowerReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlantFlowerGiveFriendFlowerReq", [
            { no: 6, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "flower_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } }
        ]);
    }
    create(value) {
        const message = { scheduleId: 0, uid: 0, flowerNumMap: {} };
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
                case /* uint32 schedule_id */ 6:
                    message.scheduleId = reader.uint32();
                    break;
                case /* uint32 uid */ 3:
                    message.uid = reader.uint32();
                    break;
                case /* map<uint32, uint32> flower_num_map */ 13:
                    this.binaryReadMap13(message.flowerNumMap, reader, options);
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
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerGiveFriendFlowerReq.flower_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 schedule_id = 6; */
        if (message.scheduleId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.scheduleId);
        /* uint32 uid = 3; */
        if (message.uid !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.uid);
        /* map<uint32, uint32> flower_num_map = 13; */
        for (let k of Object.keys(message.flowerNumMap))
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.flowerNumMap[k]).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerGiveFriendFlowerReq
 */
exports.PlantFlowerGiveFriendFlowerReq = new PlantFlowerGiveFriendFlowerReq$Type();
