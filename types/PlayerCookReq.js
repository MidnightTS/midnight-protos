"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCookReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerCookReq$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerCookReq", [
            { no: 1, name: "recipe_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "qte_quality", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "cook_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "assist_avatar", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { recipeId: 0, qteQuality: 0, cookCount: 0, assistAvatar: 0 };
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
                case /* uint32 recipe_id */ 1:
                    message.recipeId = reader.uint32();
                    break;
                case /* uint32 qte_quality */ 5:
                    message.qteQuality = reader.uint32();
                    break;
                case /* uint32 cook_count */ 7:
                    message.cookCount = reader.uint32();
                    break;
                case /* uint32 assist_avatar */ 12:
                    message.assistAvatar = reader.uint32();
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
        /* uint32 recipe_id = 1; */
        if (message.recipeId !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.recipeId);
        /* uint32 qte_quality = 5; */
        if (message.qteQuality !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.qteQuality);
        /* uint32 cook_count = 7; */
        if (message.cookCount !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.cookCount);
        /* uint32 assist_avatar = 12; */
        if (message.assistAvatar !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.assistAvatar);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerCookReq
 */
exports.PlayerCookReq = new PlayerCookReq$Type();
