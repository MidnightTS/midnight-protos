"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBattlePassProductRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetBattlePassProductRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetBattlePassProductRsp", [
            { no: 14, name: "cur_schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "product_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "price_tier", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "battle_pass_product_play_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { curScheduleId: 0, productId: "", priceTier: "", retcode: 0, battlePassProductPlayType: 0 };
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
                case /* uint32 cur_schedule_id */ 14:
                    message.curScheduleId = reader.uint32();
                    break;
                case /* string product_id */ 2:
                    message.productId = reader.string();
                    break;
                case /* string price_tier */ 9:
                    message.priceTier = reader.string();
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 battle_pass_product_play_type */ 15:
                    message.battlePassProductPlayType = reader.uint32();
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
        /* uint32 cur_schedule_id = 14; */
        if (message.curScheduleId !== 0)
            writer.tag(14, runtime_1.WireType.Varint).uint32(message.curScheduleId);
        /* string product_id = 2; */
        if (message.productId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.productId);
        /* string price_tier = 9; */
        if (message.priceTier !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.priceTier);
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 battle_pass_product_play_type = 15; */
        if (message.battlePassProductPlayType !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.battlePassProductPlayType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetBattlePassProductRsp
 */
exports.GetBattlePassProductRsp = new GetBattlePassProductRsp$Type();
