"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HachiActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const HachiStageInfo_1 = require("./HachiStageInfo");
// @generated message type with reflection information, may provide speed optimized methods
class HachiActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HachiActivityDetailInfo", [
            { no: 6, name: "stage_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => HachiStageInfo_1.HachiStageInfo } }
        ]);
    }
    create(value) {
        const message = { stageMap: {} };
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
                case /* map<uint32, HachiStageInfo> stage_map */ 6:
                    this.binaryReadMap6(message.stageMap, reader, options);
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
    binaryReadMap6(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.uint32();
                    break;
                case 2:
                    val = HachiStageInfo_1.HachiStageInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field HachiActivityDetailInfo.stage_map");
            }
        }
        map[key ?? 0] = val ?? HachiStageInfo_1.HachiStageInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* map<uint32, HachiStageInfo> stage_map = 6; */
        for (let k of Object.keys(message.stageMap)) {
            writer.tag(6, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            HachiStageInfo_1.HachiStageInfo.internalBinaryWrite(message.stageMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HachiActivityDetailInfo
 */
exports.HachiActivityDetailInfo = new HachiActivityDetailInfo$Type();
