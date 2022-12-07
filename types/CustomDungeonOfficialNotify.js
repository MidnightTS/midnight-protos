"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDungeonOfficialNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const EnterCustomDungeonType_1 = require("./EnterCustomDungeonType");
const TryCustomDungeonType_1 = require("./TryCustomDungeonType");
// @generated message type with reflection information, may provide speed optimized methods
class CustomDungeonOfficialNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("CustomDungeonOfficialNotify", [
            { no: 2, name: "try_type", kind: "enum", T: () => ["TryCustomDungeonType", TryCustomDungeonType_1.TryCustomDungeonType, "TRY_CUSTOM_DUNGEON_TYPE_"] },
            { no: 1, name: "enter_type", kind: "enum", T: () => ["EnterCustomDungeonType", EnterCustomDungeonType_1.EnterCustomDungeonType, "ENTER_CUSTOM_DUNGEON_TYPE_"] },
            { no: 5, name: "official_black_coin_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { tryType: 0, enterType: 0, officialBlackCoinList: [] };
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
                case /* TryCustomDungeonType try_type */ 2:
                    message.tryType = reader.int32();
                    break;
                case /* EnterCustomDungeonType enter_type */ 1:
                    message.enterType = reader.int32();
                    break;
                case /* repeated uint32 official_black_coin_list */ 5:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.officialBlackCoinList.push(reader.uint32());
                    else
                        message.officialBlackCoinList.push(reader.uint32());
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
    internalBinaryWrite(message, writer, options) {
        /* TryCustomDungeonType try_type = 2; */
        if (message.tryType !== 0)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.tryType);
        /* EnterCustomDungeonType enter_type = 1; */
        if (message.enterType !== 0)
            writer.tag(1, runtime_2.WireType.Varint).int32(message.enterType);
        /* repeated uint32 official_black_coin_list = 5; */
        if (message.officialBlackCoinList.length) {
            writer.tag(5, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.officialBlackCoinList.length; i++)
                writer.uint32(message.officialBlackCoinList[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message CustomDungeonOfficialNotify
 */
exports.CustomDungeonOfficialNotify = new CustomDungeonOfficialNotify$Type();
