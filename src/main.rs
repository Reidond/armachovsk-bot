use serenity::framework::standard::{
    macros::{command, group},
    CommandResult, StandardFramework,
};
use serenity::model::channel::Message;
use serenity::prelude::{Context, EventHandler};
use serenity::Client;
use std::env;

#[group]
#[commands(govno)]
struct General;

struct Handler;

impl EventHandler for Handler {}

fn main() {
    let mut client = Client::new(&env::var("DISCORD_TOKEN").expect("token"), Handler)
        .expect("Error creating handler");

    client.with_framework(
        StandardFramework::new()
            .configure(|c| c.prefix("+"))
            .group(&GENERAL_GROUP),
    );

    if let Err(why) = client.start() {
        println!("An error occurred while running the client: {:?}", why);
    }
}

#[command]
fn govno(ctx: &mut Context, msg: &Message) -> CommandResult {
    msg.reply(ctx, "да блять я блять обосрал блять я перданул блять я обосрал свои эти шорты нахуй и пришлось мне от говна их немножко оттереть блять и бросить в стирку нахуй и потом жопу ещё поддмыть блять и всё это заняло время бля вооот сейчас надо пойти что-то другое одеть блять такая вот хуйня это всё из-за бухла блять бухло слабит типа расслабляет во всех смыслах этого слова ебать")?;

    Ok(())
}
