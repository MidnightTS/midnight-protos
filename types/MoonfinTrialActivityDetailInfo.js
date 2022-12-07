"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoonfinTrialActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MoonfinTrialLevelInfo_1 = require("./MoonfinTrialLevelInfo");
// @generated message type with reflection information, may provide speed optimized methods
class MoonfinTrialActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("MoonfinTrialActivityDetailInfo", [
            { no: 13, name: "special_fish_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "level_info_map", kind: "map", K: 13 /*ScalarType.UINT32*/, V: { kind: "message", T: () => MoonfinTrialLevelInfo_1.MoonfinTrialLevelInfo } }
        ]);
    }
    create(value) {
        const message = { specialFishCount: 0, levelInfoMap: {} };
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
                case /* uint32 special_fish_count */ 13:
                    message.specialFishCount = reader.uint32();
                    break;
                case /* map<uint32, MoonfinTrialLevelInfo> level_info_map */ 5:
                    this.binaryReadMap5(message.levelInfoMap, reader, options);
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
                    val = MoonfinTrialLevelInfo_1.MoonfinTrialLevelInfo.internalBinaryRead(reader, reader.uint32(), options);
                    break;
                default: throw new globalThis.Error("unknown map entry field for field MoonfinTrialActivityDetailInfo.level_info_map");
            }
        }
        map[key ?? 0] = val ?? MoonfinTrialLevelInfo_1.MoonfinTrialLevelInfo.create();
    }
    internalBinaryWrite(message, writer, options) {
        /* uint32 special_fish_count = 13; */
        if (message.specialFishCount !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.specialFishCount);
        /* map<uint32, MoonfinTrialLevelInfo> level_info_map = 5; */
        for (let k of Object.keys(message.levelInfoMap)) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.Varint).uint32(parseInt(k));
            writer.tag(2, runtime_1.WireType.LengthDelimited).fork();
            MoonfinTrialLevelInfo_1.MoonfinTrialLevelInfo.internalBinaryWrite(message.levelInfoMap[k], writer, options);
            writer.join().join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message MoonfinTrialActivityDetailInfo
 */
exports.MoonfinTrialActivityDetailInfo = new MoonfinTrialActivityDetailInfo$Type();
