"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuoyantCombatSettleNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const BuoyantCombatSettleInfo_1 = require("./BuoyantCombatSettleInfo");
// @generated message type with reflection information, may provide speed optimized methods
class BuoyantCombatSettleNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("BuoyantCombatSettleNotify", [
            { no: 8, name: "gallery_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "settle_info", kind: "message", T: () => BuoyantCombatSettleInfo_1.BuoyantCombatSettleInfo }
        ]);
    }
    create(value) {
        const message = { galleryId: 0 };
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
                case /* uint32 gallery_id */ 8:
                    message.galleryId = reader.uint32();
                    break;
                case /* BuoyantCombatSettleInfo settle_info */ 15:
                    message.settleInfo = BuoyantCombatSettleInfo_1.BuoyantCombatSettleInfo.internalBinaryRead(reader, reader.uint32(), options, message.settleInfo);
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
        /* uint32 gallery_id = 8; */
        if (message.galleryId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.galleryId);
        /* BuoyantCombatSettleInfo settle_info = 15; */
        if (message.settleInfo)
            BuoyantCombatSettleInfo_1.BuoyantCombatSettleInfo.internalBinaryWrite(message.settleInfo, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message BuoyantCombatSettleNotify
 */
exports.BuoyantCombatSettleNotify = new BuoyantCombatSettleNotify$Type();
