"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleurFairFallSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const FleurFairFallSettleInfo_1 = require("./FleurFairFallSettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class FleurFairFallSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("FleurFairFallSettleNotify", [
            { no: 2, name: "minigame_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "settle_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => FleurFairFallSettleInfo_1.FleurFairFallSettleInfo } }
        ]);
    }
    create(value) {
        const message = { minigameId: 0, settleInfoMap: {} };
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
                case /* uint32 minigame_id */ 2:
                    message.minigameId = reader.uint32();
                    break;
                case /* map<uint32, FleurFairFallSettleInfo> settle_info_map */ 13:
                    this.binaryReadMap13(message.settleInfoMap, reader, options);
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
                    val = FleurFairFallSettleInfo_1.FleurFairFallSettleInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field FleurFairFallSettleNotify.settle_info_map");
            }
        }
        map[key ?? 0] = val ?? FleurFairFallSettleInfo_1.FleurFairFallSettleInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 minigame_id = 2; */
        if (message.minigameId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.minigameId);
        /* map<uint32, FleurFairFallSettleInfo> settle_info_map = 13; */
        for (let k of Object.keys(message.settleInfoMap)) {
            writer.tag(13, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            FleurFairFallSettleInfo_1.FleurFairFallSettleInfo.internalBinaryWrite(message.settleInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message FleurFairFallSettleNotify
 */
exports.FleurFairFallSettleNotify = new FleurFairFallSettleNotify$Type();
