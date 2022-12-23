"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UgcActivityDetailInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const OfficialCustomDungeon_1 = require("./OfficialCustomDungeon");
// @generated message type with reflection information, may provide speed optimized methods
class UgcActivityDetailInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("UgcActivityDetailInfo", [
            { no: 14, name: "is_enable_ugc", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 10, name: "official_custom_dungeon_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => OfficialCustomDungeon_1.OfficialCustomDungeon },
            { no: 4, name: "custom_dungeon_group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "is_ugc_feature_closed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { isEnableUgc: false, officialCustomDungeonList: [], customDungeonGroupId: 0, isUgcFeatureClosed: false };
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
                case /* bool is_enable_ugc */ 14:
                    message.isEnableUgc = reader.bool();
                    break;
                case /* repeated OfficialCustomDungeon official_custom_dungeon_list */ 10:
                    message.officialCustomDungeonList.push(OfficialCustomDungeon_1.OfficialCustomDungeon.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 custom_dungeon_group_id */ 4:
                    message.customDungeonGroupId = reader.uint32();
                    break;
                case /* bool is_ugc_feature_closed */ 9:
                    message.isUgcFeatureClosed = reader.bool();
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
    internalBinaryWrite(message, writer, options) {
        /* bool is_enable_ugc = 14; */
        if (message.isEnableUgc !== false)
            writer.tag(14, runtime_1.WireType.Varint).bool(message.isEnableUgc);
        /* repeated OfficialCustomDungeon official_custom_dungeon_list = 10; */
        for (let i = 0; i < message.officialCustomDungeonList.length; i++)
            OfficialCustomDungeon_1.OfficialCustomDungeon.internalBinaryWrite(message.officialCustomDungeonList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 custom_dungeon_group_id = 4; */
        if (message.customDungeonGroupId !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.customDungeonGroupId);
        /* bool is_ugc_feature_closed = 9; */
        if (message.isUgcFeatureClosed !== false)
            writer.tag(9, runtime_1.WireType.Varint).bool(message.isUgcFeatureClosed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message UgcActivityDetailInfo
 */
exports.UgcActivityDetailInfo = new UgcActivityDetailInfo$Type();
