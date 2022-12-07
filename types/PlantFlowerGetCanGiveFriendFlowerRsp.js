"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerGetCanGiveFriendFlowerRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerGetCanGiveFriendFlowerRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlantFlowerGetCanGiveFriendFlowerRsp", [
            { no: 5, name: "flower_num_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "scalar", T: 13 /*ScalarType.UINT32*/ } },
            { no: 3, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 13, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { flowerNumMap: {}, retcode: 0, scheduleId: 0 };
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
                case /* map<uint32, uint32> flower_num_map */ 5:
                    this.binaryReadMap5(message.flowerNumMap, reader, options);
                    break;
                case /* int32 retcode */ 3:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 schedule_id */ 13:
                    message.scheduleId = reader.uint32();
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
    binaryReadMap5(map, reader, options) {
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
                default: throw new globalThis.Error("unknown map entry field for field PlantFlowerGetCanGiveFriendFlowerRsp.flower_num_map");
            }
        }
        map[key ?? 0] = val ?? 0;
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, uint32> flower_num_map = 5; */
        for (let k of Object.keys(message.flowerNumMap))
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k)).tag(2, runtime_1.WireType.Varint).uint32(message.flowerNumMap[k]).join();
        /* int32 retcode = 3; */
        if (message.retcode !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 schedule_id = 13; */
        if (message.scheduleId !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.scheduleId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerGetCanGiveFriendFlowerRsp
 */
exports.PlantFlowerGetCanGiveFriendFlowerRsp = new PlantFlowerGetCanGiveFriendFlowerRsp$Type();
