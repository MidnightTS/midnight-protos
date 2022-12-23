"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BattlePassRewardTakeOption = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BattlePassRewardTag_1 = require("./BattlePassRewardTag");
// @generated message type with reflection information, may provide speed optimized methods
class BattlePassRewardTakeOption$Type extends runtime_5.MessageType {
    constructor() {
        super("BattlePassRewardTakeOption", [
            { no: 5, name: "option_idx", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "tag", kind: "message", T: () => BattlePassRewardTag_1.BattlePassRewardTag }
        ]);
    }
    create(value) {
        const message = { optionIdx: 0 };
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
                case /* uint32 option_idx */ 5:
                    message.optionIdx = reader.uint32();
                    break;
                case /* BattlePassRewardTag tag */ 15:
                    message.tag = BattlePassRewardTag_1.BattlePassRewardTag.internalBinaryRead(reader, reader.uint32(), options, message.tag);
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
        /* uint32 option_idx = 5; */
        if (message.optionIdx !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.optionIdx);
        /* BattlePassRewardTag tag = 15; */
        if (message.tag)
            BattlePassRewardTag_1.BattlePassRewardTag.internalBinaryWrite(message.tag, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BattlePassRewardTakeOption
 */
exports.BattlePassRewardTakeOption = new BattlePassRewardTakeOption$Type();
