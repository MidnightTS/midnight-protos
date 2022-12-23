"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuyBattlePassLevelRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class BuyBattlePassLevelRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("BuyBattlePassLevelRsp", [
            { no: 11, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 15, name: "buy_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, buyLevel: 0 };
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
                case /* int32 retcode */ 11:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 buy_level */ 15:
                    message.buyLevel = reader.uint32();
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
        /* int32 retcode = 11; */
        if (message.retcode !== 0)
            writer.tag(11, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 buy_level = 15; */
        if (message.buyLevel !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.buyLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BuyBattlePassLevelRsp
 */
exports.BuyBattlePassLevelRsp = new BuyBattlePassLevelRsp$Type();
